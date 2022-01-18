import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RefundTermsModal.css";
import refundImg1 from "../../images/Refund/Refund1.png";
import refundImg2 from "../../images/Refund/Refund2.png";
import refundImg3 from "../../images/Refund/Refund3.png";
import refundImg4 from "../../images/Refund/Refund4.png";

const RefundTermsModal = ({ show, handleClose, setTerms }) => {
  const refundImgArray = [refundImg1, refundImg2, refundImg3, refundImg4];

  const [agree, setAgree] = useState(false);

  let i = 0;

  const refundImgRef = useRef(refundImgArray[i]);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleIncrementImg = () => {
    i = i + 1;
    if (i === 3) {
      setAgree(true);
      refundImgRef.current.src = refundImgArray[i];
      i = 0;
    } else {
      refundImgRef.current.src = refundImgArray[i];
      setAgree(false);
    }
  };

  const refundModalStyel = {
    border: "none",
    padding: "15px 60px",
    backgroundColor: "var(--primary)",
    borderRadius: "5px",
    color: "#fff",
    fontWeight: "700",
    fontSize: "16px",
  };
  return (
    <Modal show={show} animation={false} centered>
      <div>
        <div>
          <img
            ref={refundImgRef}
            className="w-100 img-fluid"
            src={refundImgArray[i]}
            alt=""
          />
        </div>
        {agree === true && (
          <p style={{ padding: "30px 20px 0" }}>
            By agreeing to our{" "}
            <span className="brand_color fw-bold">terms and conditions</span>,
            you are aware that refund account is the default refund method and
            can be changed at any time.
          </p>
        )}
        <div
          style={{
            padding: "25px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div onClick={() => setTerms(true)}>
            <button
              onClick={handleClose}
              style={{
                border: "1px solid var(--primary)",
                padding: "15px 60px",
                backgroundColor: "#fff",
                borderRadius: "5px",
                color: "var(--primary)",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              SKIP
            </button>
          </div>

          <div>
            {agree ? (
              <div onClick={() => setTerms(true)}>
                <button style={refundModalStyel} onClick={handleClose}>
                  AGREE
                </button>
              </div>
            ) : (
              <button style={refundModalStyel} onClick={handleIncrementImg}>
                NEXT
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RefundTermsModal;
