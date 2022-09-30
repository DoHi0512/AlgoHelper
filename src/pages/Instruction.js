import React from "react";
import "../static/Instruction.css"
export default function Instruction(){
    return (
        <div className="instruction">
            <div>
                <h2>1. AH의 모든 서비스는 로그인을 해야 이용 할 수 있어요.</h2>
                <p>아이디가 있으면 <a href="login">로그인</a>을, 없으시면 <a href="register">회원가입</a>을 해 주세요.</p>
            </div>
            <div>
                <h2>2. 로그인을 했다면 문제 추천을 받을 수 있어요.</h2>
                <p>"주간 문제" 페이지에서 문제를 추천받을 수 있어요. <br/><br/>사용자 수준에 맞추어서 매주 7개의 추천 문제를 제공해요. <br/><br/>문제는 매주 월요일 6시에 바뀌어요.</p>
            </div>
            <div>
                <h2>3. 만약 문제를 푸셨다면 체크박스 선택 후 "제출"을 눌러주세요.</h2>
                <p>"통계 보기" 페이지에서 자신의 성실도를 볼 수 있어요.</p>
            </div>
        </div>
    )
}