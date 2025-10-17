import React from "react";

export default function DisclaimerData() {
  return (
    <div
      aria-label="면책 고지"
      style={{
        margin: "16 auto",
        width: "60%",
        padding: "12px 14px",
        borderTop: "1px solid #e5e7eb",
        background: "#fafafa",
        color: "#6b7280",
        fontSize: 12,
        lineHeight: 1.6,
      }}
    >
      <strong style={{ color: "#374151", margin: "14px 0" }}>
        면책 고지(Disclaimer)
      </strong>
      <br />
      <p style={{
        textAlign: "justify",
        textIndent: "1rem",
      }}>
      본 페이지의 데이터 테이블 및 관련 정보(가격, 재무, 뉴스, 지표 등)는 오류, 지연, 누락이 발생할 수 있으며
      최신성·정확성·완전성이 보장되지 않습니다. 제공되는 모든 정보는 일반적인 참고용 자료이며{" "}

      <em>투자 자문·권유·중개에 해당하지 않습니다</em>. 과거의 성과는 미래의 수익을 보장하지 않습니다. 사용자는 본 정보를 단독
      의사결정의 근거로 삼지 말고, 필요 시 공시/원천 데이터 및 전문가 의견을 추가 확인하시기 바랍니다. 본 정보의 사용 또는
      신뢰로 인해 발생하는 어떠한 손실·손해에 대해서도 제공자는 법적 책임을 지지 않습니다. 또한, 제3자 제공 데이터나 외부
      시스템에 의존하는 항목은 전송 지연·서비스 중단 등으로 변경될 수 있습니다.
      </p>
    </div>
  );
}

