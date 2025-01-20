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
    // id: pk
    // title: 덱 판매 제목 or 낱장 카드명
    // content: 덱판매 글 내용
    // optiong: 'deck' or 'single'
    // trade_type: 'purchase' or 'sale'
    // status: 'in_progress' or 'completed'
    // rarity: 'anything' or 'normal' or 'normal_rare' or 'super_rare' or 'ultra_rare' or
    //         'ultimate_rare' or 'secret_rare' or 'holographic_rare' or ...
    //
    {
      id: 1,
      title: "증식의 G",
      content: "",
      option: "single",
      trade_type: "purchase",
      status: "in_progress",
      rarity: "anything",
    },
    {
      id: 2,
      title: "텐 사우전드 드래곤",
      content: "",
      option: "single",
      trade_type: "purchase",
      status: "in_progress",
      rarity: "",
    },
    {
      id: 3,
      title: "천년 데먼스미스 스네이크아이 덱 삽니다.",
      content: "",
      option: "deck",
      trade_type: "purchase",
      status: "in_progress",
      rarity: "",
    },
    {
      id: 4,
      title: "스타더스트 드래곤",
      content: "",
      option: "single",
      trade_type: "purchase",
      status: "in_progress",
      rarity: "",
    },
    {
      id: 5,
      title: "유벨 덱 팝니다.",
      content: "",
      option: "deck",
      trade_type: "sale",
      status: "in_progress",
      rarity: "",
      deck_list: [
        {
          id: 1,
          card_name: "증식의 G",
          rarity: "rare",
        },
        {
          id: 2,
          card_name: "증식의 G",
          rarity: "normal",
        },
        {
          id: 3,
          card_name: "증식의 G",
          rarity: "ultra",
        },
      ],
    },
    {
      id: 6,
      title: "메멘토 덱 팝니다.",
      content: "",
      option: "deck",
      trade_type: "sale",
      status: "in_progress",
      rarity: "",
    },
    {
      id: 7,
      title: "메멘토 덱 삽니다.",
      content: "",
      option: "deck",
      trade_type: "purchase",
      status: "completed",
      rarity: "",
    },
    {
      id: 8,
      title: "욕망의 항아리",
      content: "",
      option: "single",
      trade_type: "purchase",
      status: "completed",
      rarity: "",
    },
    {
      id: 9,
      title: "요선수 덱 팝니다.",
      content: "",
      option: "deck",
      trade_type: "sale",
      status: "completed",
      rarity: "",
    },
    {
      id: 10,
      title: "격류장",
      content: "",
      option: "single",
      trade_type: "sale",
      status: "in_progress",
      rarity: "ultra",
    },
    {
      id: 11,
      title: "날개 크리보",
      content: "",
      option: "single",
      trade_type: "sale",
      status: "completed",
      rarity: "rare",
    },
  ],
};

export default GetUserInfo;
