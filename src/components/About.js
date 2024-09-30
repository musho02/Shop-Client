import React from 'react';
import RowComponent from './RowComponent';
import ColorStrip from './ColorStrip';
import ad1 from '../Adv/ad1.png';
import './Timeline.css';
import Footer from './Footer';

const About = () => {

    return (
        <div>
            <RowComponent
                leftContent={
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', width: '100%', textAlign: 'left', paddingLeft: '20px', paddingRight: '20px' }}>
                        <p style={{ fontSize: '48px', fontWeight: 'bolder', margin: '0px' }}>ประวัติของเรา</p>
                        <p style={{ fontSize: '18px' }}>Vaseline® ถือกำเนิดที่บรูคลินในปี 1870 ปัจจุบันมีจำหน่ายในกว่า 70 ประเทศ และได้รับการยกย่องว่าเป็นหนึ่งในแบรนด์ผลิตภัณฑ์สำหรับผิวมือและผิวกายชั้นนำของโลก</p>
                    </div>
                }
                rightContent={<img src={ad1} alt="ad1" style={{ maxWidth: '100%', height: 'auto' }} />}
            />
            <ColorStrip height="15px" width="100%" />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center', color: '#000000' }}>
                <h2 className='gradient' style={{ margin: '18px auto', padding: '0 0 25px 0', fontStyle: 'normal', fontWeight: '700', fontSize: '30px' }} >ช่วยรักษาผิวตลอดหลายศตวรรษ</h2>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <ColorStrip height="5px" width="9%" />
                </div>
                <p>แบรนด์ Vaseline® สร้างขึ้นโดยมีพื้นฐานมาจากประสิทธิภาพการรักษาของ Vaseline® เจลลี่ เราคิดค้นสูตร "เจลลี่มหัศจรรย์” นี้ในปี 1870 และได้ช่วยรักษาผิวแห้งมานานกว่า 150 ปี</p>
                <p>เริ่มต้นจาก Vaseline® ฮีลลิ่ง เจลลี่ 1 กระปุก วันนี้เราได้เติบโตขึ้นจนมีกลุ่มผลิตภัณฑ์ที่หลากหลาย ซึ่งรวมถึงโลชั่น Vaseline® อินเทนซีฟ แคร์™ และกระปุก Vaseline® ลิป เทอราพี™ และทุกผลิตภัณฑ์ของ Vaseline® ล้วนแล้วแต่มีคุณสมบัติในการรักษาผิวของ Vaseline® เจลลี่  เราขอชวนคุณย้อนเวลากลับไปดูต้นกำเนิดของแบรนด์ Vaseline® และมาเรียนรู้กันว่าหลังจากผ่านไปหนึ่งศตวรรษแห่งการดูแลรักษาผิว แบรนด์นี้กลายเป็นหนึ่งในแบรนด์ผลิตภัณฑ์ดูแลผิวที่โด่งดังที่สุดทั่วโลกได้อย่างไร</p>
            </div>
            <div class="timeline">
                <div class="container left">
                    <div class="content">
                        <h2>2017</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>2016</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2>2015</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>2012</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="container left">
                    <div class="content">
                        <h2>2011</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="container right">
                    <div class="content">
                        <h2>2007</h2>
                        <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;