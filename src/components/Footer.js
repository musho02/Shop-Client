import React from 'react';
import './Footer.css';
import ColorStrip from './ColorStrip';

const Footer = () => {
    return (
        <>
            <ColorStrip height="15px" width="100%"/>
            <footer className="footer">
                <div className="footer-section">
                    <h4>ค้นหา</h4>
                    <ul className="subtopics">
                        <li><a href='/home'>ผลิตภัณฑ์ทั้งหมด</a></li>
                        <li><a href='#'>บทความทั้งหมด</a></li>
                        <li><a href='#'>ให้ทุกคนมีผิวสุขภาพดี</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>ความช่วยเหลือ</h4>
                    <ul className="subtopics">
                        <li><a href='/contack'>ติดต่อเรา</a></li>
                        <li><a href='#'>คำถามที่พบบ่อย</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>กฎหมาย</h4>
                    <ul className="subtopics">
                        <li><a href='#'>แผนผังเว็บไซต์</a></li>
                        <li><a href='#'>การเข้าถึง</a></li>
                        <li><a href='#'>ประกาศเกี่ยวกับความเป็นส่วนตัว</a></li>
                        <li><a href='#'>ประกาศเกี่ยวกับคุกกี้</a></li>
                        <li><a href='#'>ข้อตกลงการใช้งาน</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>ติดต่อเรา</h4>
                    <ul className="subtopics">
                        <li><a href='https://web.facebook.com/'>Facebook</a></li>
                        <li><a href='https://www.youtube.com/'>Youtube</a></li>
                        <li><a href='https://www.instagram.com/'>Instragram</a></li>
                        <li><a href='https://www.tiktok.com/'>Tiktok</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
