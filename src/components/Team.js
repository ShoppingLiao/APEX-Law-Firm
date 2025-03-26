import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TEAM_LIST = [
  {
    title: '主持律師',
    name: '歐陽徵',
    tel: '0965-858-580',
    mail: 'apexlawtaichung@gmail.com',
    imgName: 'team-1',
    bio: [
      '國立政治大學法研所碩士',
      '臺中市政府法律扶助顧問',
      '臺中市政府勞工大學講師',
      '財團法人法律扶助基金會臺中分會審查委員',
      '靜宜大學講師/嶺東科技大學講師',
      '正勤法律事務所律師',
      '中國醫藥大學醫療法律專班',
      '律師學院營建工程法律專科',
      '國立臺北大學法學士',
    ],
  },
  {
    title: '主持律師',
    name: '林根億',
    tel: '0978-709-195',
    mail: 'a13579378@gmail.com',
    imgName: 'team-2',
    bio: [
      '司法院刑事廳量刑分析研究小組',
      '臺北市政府法律諮詢律師',
      '南投市公所法律諮詢律師',
      '臺北大學法律服務社法律諮詢律師',
      '中正大學法律服務社法律諮詢律師',
    ],
  },
  {
    title: '受雇律師',
    name: '楊曜宇',
    tel: '0952-984-722',
    mail: 'yaoyuyang920@gmail.com',
    imgName: 'team-5',
    bio: ['國立臺北大學法學學士', '國立臺灣大學法學碩士', '臺北大學法律服務社法律諮詢律師'],
  },
  /*
  {
    title: '合署律師',
    name: '王彥',
    tel: '0919-202-977',
    mail: 'swda247226@gmail.com',
    imgName: 'team-3',
    bio: [
      '國立臺灣大學法研所刑法組碩士',
      '臺灣臺東地方法院刑事庭法官助理',
      '民間司法改革基金會長期合作律師',
      '德律國際商標專利法律事務所受僱律師',
    ],
    expertise: ['家事律師培訓合格', '勞動爭議案件', '詐欺、妨害性自主等刑案', '一般民刑事案件'],
  },
  */
  {
    title: '合署律師',
    name: '郭怜君',
    tel: '0902-181-700',
    mail: 'kuolaw611@gmail.com',
    imgName: 'team-4',
    bio: [
      '私立輔仁大學法律系',
      '財團法人法律扶助基金會扶助律師',
      '臺中市潭子區頭家國小公益顧問律師',
      '亞細亞國際法律事務所受僱律師',
      '尚論法律事務所實習律師',
      '臺灣臺中地方法院刑事庭法官助理',
    ],
  },
  {
    title: '合署律師',
    name: '陳翎',
    tel: '0963-357-453',
    mail: 'cl99601192@gmail.com',
    imgName: 'team-6',
    bio: ['國立政治大學法學學士', '國立中興大學法學碩士', '臺中地方法院法官助理'],
  },
  {
    title: '合署律師',
    name: '柯瑞源',
    bio: [
      '國立臺灣大學法學學士',
      '國立臺灣大學法學碩士',
      '佐誠律師事務所受雇律師',
      '眾城國際法律事務所受雇律師',
      '合創法律事務所合署律師'
    ],
  },
  {
    title: '合署律師',
    name: '劉俊宏',
    tel: '04-2310-1213',
    mail: 'junhung0204@163.com',
    imgName: 'team-7',
    bio: [
      '國立政治大學法學學士',
      '國立臺北大學法學碩士',
      '北京中國政法大學法學博士',
      '中華民國律師',
      '中華人民共和國律師',
      '北京市鑫諾律師事務所律師',
      '財團法人海峽交流基金會臺商財經法律顧問',
    ],
  },
  {
    title: '合署律師',
    name: '鄭才',
    tel: '0988-079-648',
    mail: 'jacky123ooo@gmail.com',
    imgName: 'team-8',
    bio: [
      '東海大學法律碩士',
      '東海大學兼任講師',
      '曾任明冠聯合法律事務所律師',
      '鼎道國際法律事務所合署律師',
      '岩語茶連鎖飲料店總部顧問律師',
      '臺中市警察局烏日分局顧問律師',
    ],
  },
  {
    title: '合署律師',
    name: '楊時綱',
    tel: '0912-794-594',
    mail: 'ysklushi@gmail.com',
    imgName: 'team-9',
    bio: [
      '國立政治大學政研所碩士',
      '財團法人法律扶助基金會扶助律師',
      '臺北市政府法律諮詢律師',
      '新北市政府法律諮詢律師',
      '新北市勞工大學講師',
    ],
  },
  {
    title: '合署律師',
    name: '呂緯武',
    tel: '0928-935-359',
    mail: 'nisseilaw@gmail.com',
    imgName: 'team-10',
    bio: [
      '國立臺灣大學法律學研究所公法組碩士',
      '國立臺北大學法學士',
      '財團法人法律扶助基金會扶助律師',
    ],
  },
  {
    title: '受雇律師',
    name: '劉亭妤',
    tel: '0910-701-109',
    mail: 'liulawyerliu@gmail.com',
    imgName: 'team-11',
    bio: [
      '國立中正大學財經法律學系學士',
      '國立中正大學財經法律研究所財經法組碩士',
      '立勤國際法律事務所高雄所實習律師',
      '臺中上智聯合法律事務所律師',
      '臺中市南屯區公所法律扶助服務律師', 
      '臺中市第四區居家托育服務中心講師'
    ],
  },
  {
    title: '受雇律師',
    name: '鄭志彬',
    tel: '0983-417-733',
    mail: 'sa900514@gmail.com',
    imgName: 'team-12',
    bio: [
      '臺中科技大學應用日語系學士',
      '國立政治大學法學碩士',
      '內政部警政署保安警察第四總隊警員',
    ],
  },
  {
    title: '受雇律師',
    name: '鄭皓文',
    tel: '0966-334-168',
    mail: 'haoattorney@gmail.com',
    imgName: 'team-13',
    bio: [
      '國立中正大學財經法律研究所稅法組碩士',
      '矽品精密工業股份有限公司 法務經理',
    ],
  },
  {
    title: '實習律師',
    name: '周伯彥',
    tel: '0933-616-977',
    mail: 'ray8076@gmail.com',
    bio: [
      '國立臺北大學法律學系學士',
      '臺灣士林地方法院法官助理',
    ],
  },
];

function Team() {
  return (
    <div>
      <div className="mx-auto mb-4 w-32 border-b text-center text-xl" data-aos="zoom-in">
        團隊介紹
      </div>
      {TEAM_LIST.map((item, idx) => (
        <div
          key={`team_${idx}`}
          data-aos={`fade-${idx % 2 === 0 ? 'left' : 'right'}`}
          data-aos-once={true}
          className="flex w-full flex-col items-center justify-center"
        >
          <div className="mb-4 w-full max-w-xl">
            <div className="flex items-center ">
              {item.imgName && (
                <div
                  className={clsx('h-28 w-28 rounded-full bg-contain bg-center bg-no-repeat', {
                    [`bg-[url('./assets/team-1.png')]`]: item.imgName === 'team-1',
                    [`bg-[url('./assets/team-2.png')]`]: item.imgName === 'team-2',
                    [`bg-[url('./assets/team-3.png')]`]: item.imgName === 'team-3',
                    [`bg-[url('./assets/team-4.png')]`]: item.imgName === 'team-4',
                    [`bg-[url('./assets/team-5.png')]`]: item.imgName === 'team-5',
                    [`bg-[url('./assets/team-6.png')]`]: item.imgName === 'team-6',
                    [`bg-[url('./assets/team-7.png')]`]: item.imgName === 'team-7',
                    [`bg-[url('./assets/team-8.png')]`]: item.imgName === 'team-8',
                    [`bg-[url('./assets/team-9.jpg')]`]: item.imgName === 'team-9',
                    [`bg-[url('./assets/team-10.jpg')]`]: item.imgName === 'team-10',
                    [`bg-[url('./assets/team-11.jpg')]`]: item.imgName === 'team-11',
                    [`bg-[url('./assets/team-12.jpg')]`]: item.imgName === 'team-12',
                    [`bg-[url('./assets/team-13.jpg')]`]: item.imgName === 'team-13',
                  })}
                />
              )}
              <div className="ml-4 flex-1">
                <div data-aos={`fade-${idx % 2 === 0 ? 'left' : 'right'}`} data-aos-delay={200} data-aos-once={true}>
                  {item.title}
                </div>
                <div
                  className="mb-1 text-center text-2xl font-bold"
                  data-aos={`fade-${idx % 2 === 0 ? 'left' : 'right'}`}
                  data-aos-delay={400}
                  data-aos-once={true}
                >
                  {item.name}
                </div>
                {item.tel && (
                  <div
                    className="mb-1 text-sm"
                    data-aos={`fade-${idx % 2 === 0 ? 'left' : 'right'}`}
                    data-aos-delay={600}
                    data-aos-once={true}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-phone" className="mr-2" />
                    {item.tel}
                  </div>
                )}
                {item.mail && (
                  <div
                    className="text-sm"
                    data-aos={`fade-${idx % 2 === 0 ? 'left' : 'right'}`}
                    data-aos-delay={800}
                    data-aos-once={true}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-envelope" className="mr-2" />
                    {item.mail}
                  </div>
                )}
              </div>
            </div>
            {item?.bio?.length > 0 && (
              <div className="mt-4">
                <div className="mb-2 text-xl font-semibold">學 / 經歷</div>
                {item.bio.map((bio, idx2) => (
                  <div
                    key={`team_${idx}_bio_${idx2}`}
                    className="my-1 ml-4 flex items-center"
                    data-aos={`fade-${idx % 2 === 0 ? 'left' : 'right'}`}
                    data-aos-delay={idx2 * 100}
                    data-aos-once={true}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-circle" className="mr-2 h-2 w-2" />
                    {bio}
                  </div>
                ))}
              </div>
            )}
            {item?.expertise?.length > 0 && (
              <div className="mt-4">
                <div className="mb-2 text-xl font-semibold">專長</div>
                {item.expertise.map((expert, idx3) => (
                  <div
                    key={`team_${idx}_expertise_${idx3}`}
                    className="my-1 ml-4 flex items-center"
                    data-aos={`fade-${idx % 2 === 0 ? 'left' : 'right'}`}
                    data-aos-delay={idx3 * 100}
                    data-aos-once={true}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-circle" className="mr-2 h-2 w-2" />
                    {expert}
                  </div>
                ))}
              </div>
            )}
            {idx !== TEAM_LIST.length - 1 && (
              <div
                className="border-b pb-4"
                data-aos={`fade-${idx % 2 === 0 ? 'left' : 'right'}`}
                data-aos-once={true}
                data-aos-delay={
                  200 +
                  item.bio.length * 100 +
                  (item?.expertise?.length ? item.expertise.length * 100 : 0)
                }
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
