import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TEAM_LIST = [
  {
    aos: 'fade-left',
    title: '主持律師',
    name: '歐陽徵',
    tel: '0965-858-580',
    mail: 'apexlawtaichung@gmail.com',
    imgName: 'team-1',
    bio: [
      '國立政治大學法研所碩士',
      '臺中市政府法律扶助顧問',
      '臺中市政府勞工大學講師',
      '財團法人法律扶助基金會扶助律師',
      '靜宜大學講師/嶺東科技大學講師',
      '正勤法律事務所律師',
      '中國醫藥大學醫療法律專班',
      '律師學院營建工程法律專科',
      '國立臺北大學法學士',
    ],
  },
  {
    aos: 'fade-right',
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
    aos: 'fade-left',
    title: '受雇律師',
    name: '楊曜宇',
    tel: '0952-984-722',
    mail: 'yaoyuyang920@gmail.com',
    imgName: 'team-5',
    bio: ['國立臺北大學法學學士', '國立臺灣大學法學碩士'],
  },
  {
    aos: 'fade-left',
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
  {
    aos: 'fade-right',
    title: '合署律師',
    name: '郭怜君',
    tel: '0902-181-700',
    mail: 'kuolaw611@gmail.com',
    imgName: 'team-4',
    bio: [
      '國立暨南國際大學高階經營管理碩士班',
      '私立輔仁大學法律系',
      '財團法人法律扶助基金會扶助律師',
      '臺中市潭子區頭家國小公益顧問律師',
      '亞細亞國際法律事務所受僱律師',
      '尚論法律事務所實習律師',
      '臺灣臺中地方法院刑事庭法官助理',
    ],
  },
  {
    aos: 'fade-right',
    title: '合署律師',
    name: '陳翎',
    tel: '0963-357-453',
    mail: 'cl99601192@gmail.com',
    imgName: 'team-6',
    bio: ['國立政治大學法學學士', '國立中興大學法學碩士', '臺中地方法院法官助理'],
  },
  {
    aos: 'fade-right',
    title: '合署律師',
    name: '柯瑞源',
    bio: [
      '國立臺灣大學法學學士',
      '國立臺灣大學法學碩士',
      '佐誠律師事務所',
      '眾城國際法律事務所',
      '合創法律事務所',
    ],
  },
  {
    aos: 'fade-right',
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
    aos: 'fade-right',
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
    aos: 'fade-right',
    title: '合署律師',
    name: '楊時綱',
    tel: '0912-794-594',
    mail: 'ysklushi@gmail.com',
    bio: [
      '國立政治大學政研所碩士',
      '財團法人法律扶助基金會扶助律師',
      '臺北市政府法律諮詢律師',
      '新北市政府法律諮詢律師',
      '新北市勞工大學講師',
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
                  })}
                />
              )}
              <div className="ml-4 flex-1">
                <div data-aos={item.aos} data-aos-delay={200} data-aos-once={true}>
                  {item.title}
                </div>
                <div
                  className="mb-1 text-center text-2xl font-bold"
                  data-aos={item.aos}
                  data-aos-delay={400}
                  data-aos-once={true}
                >
                  {item.name}
                </div>
                {item.tel && (
                  <div
                    className="mb-1 text-sm"
                    data-aos={item.aos}
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
                    data-aos={item.aos}
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
                    data-aos={item.aos}
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
                    data-aos={item.aos}
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
                data-aos={item.aos}
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
