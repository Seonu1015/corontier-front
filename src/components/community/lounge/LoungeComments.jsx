import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const LoungeComments = () => {
    const { comment_id } = useParams();
    const [comment, setComment] = useState([]);

    const getComments = async () => {
        const res = await axios.get(`/community/comments/${comment_id}`);
        setComment(res.data);
    }

    useEffect(() => {
        getComments();
    }, [])

    return (

        <div>
            <section class="mb-5">
                <div class="card bg-light">
                    <div class="card-body">

                        <form class="mb-4">
                            <textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea>
                        </form>
                        <div class="d-flex mb-4 p-2">
                            <div class="flex-shrink-1">
                                <img class="photo" src="http://via.placeholder.com/60x60" />
                            </div>
                            <div class="ms-3">
                                <div class="fw-bold">Daisy</div>
                                <div>CSV 파일의 로딩 옵션을 준비하고 구분자를 정의합니다.
                                    Converter 클래스를 사용하여 CSV를 로드합니다.
                                    SpreadsheetConvertOptions를 사용하여 변환 형식을 XLSX로 설정합니다.</div>
                                <div className='small' style={{ color: "gray" }}>2023.11.16</div>
                            </div>
                        </div>
                        <div class="d-flex mb-4 p-2">
                            <div class="flex-shrink-1">
                                <img class="photo" src="http://via.placeholder.com/80x80" />
                            </div>
                            <div class="ms-3">
                                <div class="fw-bold">buchu</div>
                                <div>Free Spire.XLS for .NET을 다운로드하고 설치합니다.
                                    새 프로젝트를 만들어 엽니다.
                                    "Solution Explorer"에서 "References"를 마우스 오른쪽 버튼으로 클릭한 다음, "Add Reference" "Browse"를 선택합니다.
                                    설치 경로의 "BIN" 폴더에DLL서파일을 찾아서 "OK"을 클릭합니다.</div>
                                <div className='small' style={{ color: "gray" }}>2023.11.12</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LoungeComments