import React from 'react';
import RowComponent from './RowComponent';
import ColorStrip from './ColorStrip';
import ad1 from '../Adv/ad1.png'
import ContentBox from './ContentBox';
import Footer from './Footer';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <RowComponent
                leftContent={
                    <div colostyle={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '100%', textAlign: 'left', paddingLeft: '120px' }}>
                        <p style={{ fontSize: '48px', fontWeight: 'bolder', margin: '0px' }}>ติดต่อเรา</p>
                        <p style={{ fontSize: '18px' }}>เราพร้อมช่วยคุณ</p>
                    </div>
                }
                rightContent={<img src={ad1} alt="ad1" />}
            />
            <ColorStrip height="15px" width="100%" />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', textAlign: 'center', color: '#000000' }}>
                <p style={{ fontSize: '24px', padding: '0 300px 0 300px' }}>ไม่ว่าคุณจะกำลังมองหาเคล็ดลับการดูแลผิว ข้อมูลเพิ่มเติมเกี่ยวกับผลิตภัณฑ์ของเรา หรือต้องการแชร์ความคิดเห็น เราก็พร้อมรับฟัง คุณสามารถติดต่อเราผ่าน Live แชท อีเมล และหรือติดต่อร้านค้าปลีกของเรา!</p>
            </div>
            <ContentBox
                leftContent={
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', textAlign: 'center', alignItems: 'center' }}>
                        <span style={{ fontSize: '80px', pointerEvents: 'none' }} >&#9993;</span>
                        <p style={{ fontSize: '48px', fontWeight: 'bolder', margin: '0px' }}>ส่งอีเมลหาเรา</p>
                        <p style={{ fontSize: '18px' }}>ส่งอีเมลหาเรา - เราจะติดต่อกลับหาคุณโดยเร็วที่สุด</p>
                        <button className='Contack-button' >ส่งอีเมลหาเรา</button>
                    </div>
                }
                rightContent={
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', textAlign: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: '80px', pointerEvents: 'none'}} >&#63;</span>
                    <p style={{ fontSize: '48px', fontWeight: 'bolder', margin: '0px' }}>คำถามที่พบบ่อย</p>
                    <p style={{ fontSize: '18px' }}>เรียนรู้เพิ่มเติมเกี่ยวกับ Vaseline® </p>
                    <button className='Contack-button' >ดูคำถามที่พบบ่อย</button>
                </div>
                }
            />
            <Footer />
        </div>
    )
};

export default Contact;