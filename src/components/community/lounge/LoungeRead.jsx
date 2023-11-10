import React from 'react'
import { Table } from 'react-bootstrap'

const LoungeRead = () => {
    return (
        <>
            <div className='my-5'>
                <h2 className='text-center'>상세보기</h2>
            </div>
            <Table>
                <thead>
                    <tr>
                        <td>제목</td>
                        <td colSpan={3}>오늘 하루도 끝났다</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>등록자</td>
                        <td></td>
                        <td>등록일</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan={4}>상세내용</td>
                    </tr>
                    <tr>
                        <td colSpan={4}>dsfdsfsnfkenienijn</td>    
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default LoungeRead