import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { LearnMoreLink } from "../../components/atoms";
import { SectionHeader } from "../../components/molecules";
import { Section } from "../../components/organisms";
import { Image } from "components/atoms";
import theme from '../../theme';

const useStyles = makeStyles(() => {
  const toolbar = theme.mixins.toolbar as any;
  return {
    section: {
      paddingTop: 0,
      paddingBottom: 0
    },
    label: {
      fontWeight: "bold",
      textTransform: "uppercase"
    }
  };
});

const Contact = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      if (location.hash) location = location;
    }, 200);
  }, []);
  const classes = useStyles();

  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <div>
      <Section className={classes.section}>
        <>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.1007324281045!2d100.47543941582384!3d13.712348501898632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298673e185801%3A0x783505ee6af4ce87!2s92%20Soi%20Ratchadaphisek%2015%2C%20Khwaeng%20Dao%20Khanong%2C%20Khet%20Thon%20Buri%2C%20Krung%20Thep%20Maha%20Nakhon%2010600!5e0!3m2!1sen!2sth!4v1662827833495!5m2!1sen!2sth" width="100%" height="450" style={{border:0}} loading="lazy"></iframe>
        <h2>About Us</h2>
        <p>Banh Mi Nem is a Vietnamese street food restaurant in Bangkok, Thailand, founded by Vietnamese expats who were missing the authentic flavors of their home country. Unable to find the same quality and taste in other restaurants, they decided to share their passion for Vietnamese cuisine with the Thai community and fellow expats.</p>
        <p>We offer a variety of traditional Vietnamese dishes, including:</p>
        <ul>
            <li>Banh Mi: Vietnamese sandwiches made with fresh baguettes, delicious fillings like grilled pork, pickled vegetables, and savory pate.</li>
            <li>Pho Chicken/Beef: A classic Vietnamese noodle soup made with a flavorful broth, rice noodles, and your choice of chicken or beef.</li>
            <li>Bun Cha Gio: A refreshing dish featuring spring rolls, vermicelli noodles, and a savory dipping sauce.</li>
            <li>Bun Thit Nuong: Vermicelli noodles with grilled pork, fresh herbs, and a savory sauce.</li>
            <li>Fresh spring rolls: Vietnamese fresh spring rolls filled with shrimp, pork, vegetables, and herbs, served with a peanut dipping sauce.</li>
            <li>Vietnamese Coffee: A strong, sweet coffee brewed with a traditional phin filter.</li>
        </ul>
        <p>Our values are simple: we strive to provide authentic, affordable Vietnamese street food made with fresh ingredients and traditional recipes. We are passionate about sharing our culture and culinary heritage with others, and we hope that our food will bring a taste of Vietnam to Bangkok.</p>
        <p>Our goals are ambitious: we want to introduce Thai locals and people from other countries to the diverse and delicious world of Vietnamese cuisine. We hope to participate in numerous food events and festivals, expand our food truck operations, and eventually open multiple branches of Banh Mi Nem throughout Bangkok.</p>
        <p>What sets us apart is our commitment to authenticity: we use the same ingredients and cooking techniques as street vendors in Vietnam. This dedication ensures that each dish we serve is bursting with fresh flavors and genuine Vietnamese character.</p>
        <p>We invite you to visit Banh Mi Nem and experience the vibrant flavors of Vietnamese street food. We are confident that you will be delighted by our delicious food, friendly service, and authentic atmosphere.</p>
        <p>Come taste the difference!</p>
        <p></p>
        <h2>เกี่ยวกับเรา</h2>
        <p>Banh Mi Nem เป็นร้านอาหารเวียดนามสไตล์สตรีทฟู้ดในกรุงเทพฯ ประเทศไทย ก่อตั้งโดยชาวเวียดนามที่อาศัยอยู่ในต่างแดน ซึ่งคิดถึงรสชาติอาหารบ้านเกิดที่แท้จริง เมื่อไม่สามารถหาอาหารเวียดนามที่มีคุณภาพและรสชาติเหมือนกันได้ตามร้านอาหารอื่นๆ พวกเขาจึงตัดสินใจแบ่งปันความหลงใหลในอาหารเวียดนามกับชุมชนชาวไทยและชาวต่างชาติด้วยกัน</p>
        <p>เรามีอาหารเวียดนามแบบดั้งเดิมหลากหลายชนิด เช่น:</p>
        <ul>
        <li>Banh Mi: แซนด์วิชเวียดนามที่ทำจากขนมปังบาแก็ตสดใส้ไส้แสนอร่อย เช่น หมูย่าง ผักดอง และปาเต้</li>
        <li>Pho Chicken/Beef: ก๋วยเตี๋ยวเวียดนามแบบดั้งเดิมที่ทำจากน้ำซุปเข้มข้น เส้นก๋วยเตี๋ยว และเนื้อไก่หรือเนื้อวัวตามต้องการ</li>
        <li>Bun Cha Gio: อาหารจานสดชื่นประกอบด้วยแหนมเนือง เส้นหมี่ และน้ำจิ้มรสเผ็ด</li>
        <li>Bun Thit Nuong: เส้นหมี่กับหมูย่าง ผักสด และน้ำจิ้มรสเผ็ด</li>
        <li>Gioi Cuon: แหนมเนืองสดเวียดนาม ไส้กุ้ง หมู ผัก และสมุนไพร เสิร์ฟพร้อมน้ำจิ้มถั่ว</li>
        <li>Vietnamese Coffee: กาแฟเข้มข้น หวาน หอมกรุ่น ชงด้วยเครื่องกรอง phin แบบดั้งเดิม</li>
        </ul>
        <p>คุณค่าของเราเรียบง่าย: เราพยายามนำเสนออาหารเวียดนามสไตล์สตรีทฟู้ดที่แท้จริง ราคาไม่แพง ทำจากวัตถุดิบสดใหม่ และสูตรอาหารแบบดั้งเดิม เรามีความหลงใหลในการแบ่งปันวัฒนธรรมและมรดกทางอาหารของเรากับผู้อื่น และเราหวังว่าอาหารของเราจะนำความเป็นเวียดนามมาสู่กรุงเทพฯ</p>
        <p>เป้าหมายของเราทะเยอทะยาน: เราต้องการแนะนำให้ชาวไทยและผู้คนจากประเทศอื่นๆ รู้จักอาหารเวียดนามที่หลากหลายและอร่อย เราหวังว่าจะได้มีส่วนร่วมในงานอาหารและเทศกาลอาหารมากมาย ขยายการดำเนินงานรถขายอาหารของเรา และในที่สุดก็เปิดสาขาของ Banh Mi Nem ทั่วกรุงเทพฯ</p>
        <p>สิ่งที่ทำให้เราแตกต่างคือความมุ่งมั่นในความถูกต้อง: เราใช้วัตถุดิบและเทคนิคการทำอาหารแบบเดียวกับพ่อค้าแม่ค้าริมทางในเวียดนาม ความทุ่มเทนี้รับประกันได้ว่าอาหารทุกจานที่เรานำเสนอนั้นเต็มไปด้วยรสชาติสดใหม่และความเป็นเวียดนามแท้จริง</p>
        <p>เราขอเชิญคุณมาสัมผัสกับรสชาติอาหารเวียดนามสไตล์สตรีทฟู้ดที่ Banh Mi Nem เราเชื่อว่าคุณจะประทับใจกับอาหารอร่อย บริการที่เป็นมิตร และบรรยากาศที่อบอุ่น</p>
        <p>มาลิ้มรสความแตกต่างกันเถอะ!</p>
        </>
        
      </Section>
    </div>
  );
};

export default Contact;
