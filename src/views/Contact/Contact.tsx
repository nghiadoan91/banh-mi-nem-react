import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { LearnMoreLink } from "../../components/atoms";
import { SectionHeader } from "../../components/molecules";
import { Section,SectionAlternate } from "../../components/organisms";
import { Image } from "components/atoms";
import theme from '../../theme';
import { banhMiNemfireStore } from "Config";
import { CatalogShop } from "../Catalog/components";

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
    },
    sectionAlternate: {
      paddingTop: 10,
      paddingBottom: 10
    }
  };
});

const Contact = (): JSX.Element => {
  const [shops, setShops] = useState<any>([]);
  useEffect(() => {
    console.log("fetch....");
    banhMiNemfireStore
      .collection("BranchesPage")
      .doc("Config")
      .get()
      .then(result => {
        if (result.data() != null) {
          setShops(result.data().shops);
        }
      });
  }, []);
  const classes = useStyles();

  const handleClick = (): void => {
    window.history.back();
  };

  return (
    <div>
      {shops.map((item: any, index: number) => {
        if (index % 2 === 0) {
          return (
            <Section key={index} className={classes.section}>
              <CatalogShop commonShop={item} />
            </Section>
          );
        } else {
          return (
            <SectionAlternate
              disablePadding={true}
              key={index}
              className={classes.sectionAlternate}
            >
              <CatalogShop commonShop={item} />
            </SectionAlternate>
          );
        }
      })}
      <Section className={classes.section}>
        <>
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
