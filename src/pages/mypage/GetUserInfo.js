const GetUserInfo = {
  id: 1,
  name: "내래못난호랭이라는뜻이다",
  join: "2025-01-01",
  trade_count: 13,
  report_count: 0,
  purchase_posts: 4, // 백 단에서 작업
  sale_posts: 2, // 백 단에서 작업
  completed_purchase_posts: 3, // 백 단에서 작업
  completed_sale_posts: 1, // 백 단에서 작업
  profile_picture: `${process.env.PUBLIC_URL}/images/WildSoul.png`,

  trade: [
    {
      id: 1,
      title: "증식의 쥐 , 하루우라라 삽니다.",
      content: "",
      option: "single",
      trade_type: "purchase",
      status: "in_progress",
    },
    {
      id: 2,
      title: "텐 사우전드 드래곤 삽니다.",
      content: "",
      option: "single",
      trade_type: "purchase",
      status: "in_progress",
    },
    {
      id: 3,
      title: "천년 데먼스미스 스네이크아이 덱 삽니다.",
      content: "",
      option: "deck",
      trade_type: "purchase",
      status: "in_progress",
    },
    {
      id: 4,
      title: "스타더스트 드래곤 삽니다.",
      content: "",
      option: "single",
      trade_type: "purchase",
      status: "in_progress",
    },
    {
      id: 5,
      title: "유벨 덱 팝니다.",
      content: "",
      option: "deck",
      trade_type: "sale",
      status: "in_progress",
    },
    {
      id: 6,
      title: "메멘토 덱 팝니다.",
      content: "",
      option: "deck",
      trade_type: "sale",
      status: "in_progress",
    },
    {
      id: 7,
      title: "메멘토 덱 삽니다.",
      content: "",
      option: "deck",
      trade_type: "purchase",
      status: "completed",
    },
    {
      id: 8,
      title: "해피의깃털 , 욕망의 항아리 삽니다.",
      content: "",
      option: "single",
      trade_type: "purchase",
      status: "completed",
    },
    {
      id: 9,
      title: "요선수 덱 팝니다.",
      content: "",
      option: "deck",
      trade_type: "sale",
      status: "completed",
    },
  ],
};

export default GetUserInfo;
