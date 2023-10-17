import React, { useEffect, useState } from "react";

function ScrollEventComponent() {
  const [scrollY, setScrollY] = useState(0);

  // 스크롤 이벤트 리스너를 추가
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치를 가져와서 scrollY 상태를 업데이트
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 스크롤 이벤트를 처리하는 함수
  const handleScrollEvent = () => {
    if (scrollY > 200) {
      // 스크롤이 200px 이상 내려갔을 때 원하는 작업 수행
      console.log("스크롤 위치가 200px 이상입니다.");
      // 여기에서 추가적인 작업을 수행할 수 있습니다.
    }
  };

  return (
    <div>
      <p>현재 스크롤 위치: {scrollY}px</p>
      <button onClick={handleScrollEvent}>스크롤 이벤트 확인</button>
    </div>
  );
}

export default ScrollEventComponent;
