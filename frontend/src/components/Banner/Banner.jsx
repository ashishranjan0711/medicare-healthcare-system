import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Stethoscope,
  Phone,
  Star,
  Users,
  Ribbon,
  ShieldUser,
  X,
  MessageCircle,
} from "lucide-react";
import banner from "../../assets/BannerImg.png";
import { useNavigate } from "react-router-dom";
import { bannerStyles } from "../../assets/dummyStyles";

const EMERGENCY_PHONE = "+917004829398";
const EMERGENCY_PHONE_DISPLAY = "+91 70048 29398";
const CONTACT_URL =
  "https://medicare-healthcare-system-frontened.onrender.com/contact";

const Banner = () => {
  const navigate = useNavigate();
  const [showEmergencyOptions, setShowEmergencyOptions] = useState(false);

  return (
    <div className={bannerStyles.bannerContainer}>
      <div className={bannerStyles.mainContainer}>
        <div className={bannerStyles.borderOutline}>
          <div className={bannerStyles.outerAnimatedBand}></div>
          <div className={bannerStyles.innerWhiteBorder}></div>
        </div>

        <div className={bannerStyles.contentContainer}>
          <div className={bannerStyles.flexContainer}>
            <div className={bannerStyles.leftContent}>
              <div className={bannerStyles.headerBadgeContainer}>
                <div className={bannerStyles.stethoscopeContainer}>
                  <div className={bannerStyles.stethoscopeInner}>
                    <Stethoscope className={bannerStyles.stethoscopeIcon} />
                  </div>
                </div>

                <div className={bannerStyles.titleContainer}>
                  <h1 className={bannerStyles.title}>
                    Medi
                    <span className={bannerStyles.titleGradient}>Care+</span>
                  </h1>

                  <div className={bannerStyles.starsContainer}>
                    <div className={bannerStyles.starsInner}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={bannerStyles.starIcon} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className={bannerStyles.tagline}>
                Premium Healthcare
                <span className={`block ${bannerStyles.taglineHighlight}`}>
                  At Your Fingertips
                </span>
              </p>

              <div className={bannerStyles.featuresGrid}>
                <div
                  className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderGreen}`}
                >
                  <Ribbon className={bannerStyles.featureIcon} />
                  <span className={bannerStyles.featureText}>
                    Certified Specialists
                  </span>
                </div>
                <div
                  className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderBlue}`}
                >
                  <Clock className={bannerStyles.featureIcon} />
                  <span className={bannerStyles.featureText}>
                    24/7 Availability
                  </span>
                </div>
                <div
                  className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderEmerald}`}
                >
                  <ShieldUser className={bannerStyles.featureIcon} />
                  <span className={bannerStyles.featureText}>
                    Safe &amp; Secure
                  </span>
                </div>
                <div
                  className={`${bannerStyles.featureItem} ${bannerStyles.featureBorderPurple}`}
                >
                  <Users className={bannerStyles.featureIcon} />
                  <span className={bannerStyles.featureText}>50+ Doctors</span>
                </div>
              </div>

              <div className={bannerStyles.ctaButtonsContainer}>
                <button
                  onClick={() => navigate("/doctors")}
                  aria-label="Book Appointment"
                  className={bannerStyles.bookButton}
                >
                  <div className={bannerStyles.bookButtonOverlay}></div>
                  <div className={bannerStyles.bookButtonContent}>
                    <Calendar className={bannerStyles.bookButtonIcon} />
                    <span>Book Appointment Now</span>
                  </div>
                </button>

                <button
                  onClick={() => setShowEmergencyOptions(true)}
                  aria-label="Emergency Call options"
                  aria-haspopup="dialog"
                  className={bannerStyles.emergencyButton}
                >
                  <div className={bannerStyles.emergencyButtonContent}>
                    <Phone className={bannerStyles.emergencyButtonIcon} />
                    <span>Emergency Call</span>
                  </div>
                </button>
              </div>
            </div>

            <div className={bannerStyles.rightImageSection}>
              <div className={bannerStyles.imageContainer}>
                <div className={bannerStyles.imageFrame}>
                  <img
                    src={banner}
                    alt="Professional Healthcare Team"
                    className={bannerStyles.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}

      {showEmergencyOptions && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="emergency-dialog-title"
          onClick={() => setShowEmergencyOptions(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "16px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              padding: "24px",
              width: "100%",
              maxWidth: "360px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <h3
                id="emergency-dialog-title"
                style={{ margin: 0, fontSize: "18px", fontWeight: 600 }}
              >
                Emergency assistance
              </h3>
              <button
                onClick={() => setShowEmergencyOptions(false)}
                aria-label="Close"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                }}
              >
                <X size={20} />
              </button>
            </div>

            <p
              style={{
                margin: "0 0 20px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Choose how you'd like to reach us right now.
            </p>

            
             <a
  href={`tel:${EMERGENCY_PHONE}`}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    borderRadius: "12px",
    background: "#DC2626",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    marginBottom: "12px",
  }}
>
  <Phone size={20} />
  <span>Call hospital now &mdash; {EMERGENCY_PHONE_DISPLAY}</span>
</a>

<a
  href={CONTACT_URL}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    color: "#333",
    textDecoration: "none",
    fontWeight: 500,
  }}
>
  <MessageCircle size={20} />
  <span>Visit contact page instead</span>
</a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Banner;