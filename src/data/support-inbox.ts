export const supportStatuses = {
  Open: 'Open',
  Closed: 'Closed',
} as const;

export const supportTypes = {
  Chat: 'Chat',
  Email: 'Email',
} as const;

export const supportPriorities = {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High',
} as const;

export type SupportType = keyof typeof supportTypes;
export type SupportStatusType = keyof typeof supportStatuses;
export type SupportPriorityType = keyof typeof supportPriorities;

export type MessageType = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  company: string;
  selected: boolean;
  markedAsRead: boolean;
  summary: string;
  description: string;
  date: Date;
  hasAttachments: boolean;
  category: string;
  supportType: SupportType;
  status: SupportStatusType;
  priority: SupportPriorityType;
  attachments: {
    id: string;
    type: string;
    name: string;
    size: string;
    thumbnail: string;
    preview: string;
  }[];
};

export const messages = [
  {
    id: '0239847207',
    selected: false,
    title: 'Practical Cotton Chips',
    firstName: 'Thomas',
    lastName: 'Morar',
    email: 'Laura83@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-12.webp',
    company: 'Torp Inc',
    markedAsRead: false,
    summary:
      'Rem et fugit deserunt suscipit. Voluptatibus magnam veritatis nemo.',
    description:
      'aspernatur voluptatum consectetur nemo sed exercitationem illum possimus tenetur eos magni mollitia ducimus laboriosam incidunt doloribus rerum tempore facere nulla ut tempore quod amet accusantium sit in debitis nobis qui maiores accusantium iure reiciendis consequuntur iste vel et mollitia nostrum rerum architecto beatae mollitia corrupti saepe quae perspiciatis minus eveniet alias rerum corporis cupiditate esse amet consectetur maxime voluptates eius vel occaecati distinctio excepturi illo nesciunt pariatur eveniet fugit quisquam maiores pariatur doloremque beatae atque nulla a dicta ducimus magni quisquam vero corrupti quod aperiam dolorem in labore nostrum beatae repellendus quibusdam impedit quo tempore occaecati voluptatibus rerum aliquam iste rem quaerat in quaerat soluta doloremque est assumenda vitae eos est voluptate deserunt voluptatem dolor ipsam reiciendis est libero cumque amet corporis officia odit labore suscipit unde voluptatem velit asperiores corrupti blanditiis reiciendis dolorum est animi fugit sequi eaque distinctio ut labore laudantium saepe officiis quidem temporibus excepturi blanditiis quaerat nesciunt nihil mollitia ipsam deserunt nam vero molestias maxime doloribus inventore sed aperiam debitis quas corporis a ipsam maiores laudantium repellendus atque excepturi expedita itaque eos consequuntur culpa minus dolorem voluptatum tempora provident esse quo voluptatum ipsum quia explicabo saepe voluptates nobis mollitia optio aperiam quidem repudiandae ex excepturi laborum libero minima pariatur quidem omnis quasi sint ducimus cupiditate inventore mollitia magni sed repudiandae possimus earum architecto eius qui distinctio ipsum corporis laudantium asperiores molestiae quos reiciendis est provident quis quisquam hic accusamus ex perspiciatis commodi natus aliquam debitis necessitatibus animi ut soluta ex deserunt numquam ex tenetur et porro corporis commodi quasi at ex facilis veritatis voluptatibus labore nulla dolore numquam doloremque est necessitatibus magni dignissimos voluptate cupiditate ex ipsa perferendis dolorum exercitationem repellendus atque recusandae libero ullam culpa temporibus repellat blanditiis fugiat dolore ratione aperiam ipsam aliquid maiores earum iusto quasi provident modi neque numquam natus magni consectetur excepturi magnam dolorem saepe maiores consequuntur nesciunt in expedita magnam natus vel pariatur sit officiis recusandae quisquam et alias voluptatibus error sunt exercitationem recusandae pariatur recusandae sint repellendus vero amet dolore consequatur animi quisquam officia magni qui maxime nemo harum voluptatum neque reiciendis debitis sequi officiis itaque repellendus saepe iure qui cum magni eveniet dolorem deleniti voluptatum nulla rerum consequatur vero facere necessitatibus in harum voluptatum necessitatibus dicta laboriosam cumque consequatur suscipit quis dolore nostrum perferendis eius accusamus voluptates sunt accusamus deleniti harum error accusamus quos cumque aspernatur architecto accusamus modi quisquam vero distinctio doloremque perspiciatis hic a eveniet exercitationem nostrum iste quaerat sapiente animi qui nobis voluptate',
    date: new Date('2022-11-28T23:39:07.359Z'),
    category: 'all-open',
    hasAttachments: true,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '72854',
        type: 'image',
        name: 'afore_how_strike.jpg',
        size: '2.2mb',
        thumbnail: 'https://picsum.photos/seed/0cxiM/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=5038006564028416',
      },
      {
        id: '50000',
        type: 'pdf',
        name: 'gravel_dispel_impish.pdf',
        size: '1.3mb',
        thumbnail: 'https://picsum.photos/seed/6f8nBDZJ/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=545556797587456',
      },
    ],
  },
  {
    id: '4522330396',
    selected: false,
    title: 'Incredible Wooden Keyboard',
    firstName: 'Gus',
    lastName: 'Kozey',
    email: 'Antonetta15@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-13.webp',
    company: 'Turner LLC',
    markedAsRead: false,
    summary:
      'Nisi quos nemo esse quasi non veniam repudiandae. Suscipit a nobis beatae.',
    description:
      'magnam occaecati exercitationem vel totam iusto maxime accusamus nemo totam autem veniam dolores illum quis est dolores voluptatibus doloribus quaerat quis error provident accusantium dolor facere tempore voluptates facere ex tempore alias quis nostrum quaerat vitae modi sapiente consequatur provident autem velit expedita ipsum occaecati libero perferendis corrupti totam consequatur tempora ab odio ullam at accusamus sint voluptates alias delectus impedit nam sint quisquam sint nulla hic temporibus maiores minima quia quia laborum esse quod vero accusamus id facere inventore neque dignissimos id impedit suscipit ipsa praesentium eius amet blanditiis molestiae atque veritatis ea ut porro aliquam eveniet enim temporibus deserunt inventore earum officiis blanditiis aut quisquam neque dignissimos unde nisi reprehenderit quod libero laudantium hic consequuntur reiciendis amet aut eius suscipit vitae vitae aperiam sit quod quaerat molestiae totam numquam eveniet dignissimos temporibus quisquam iusto quod cupiditate recusandae vel temporibus ullam necessitatibus saepe quisquam doloremque necessitatibus repudiandae quis ipsa perferendis dolorum velit laborum necessitatibus ea voluptatibus consectetur vitae officiis dicta dolorem est sint doloribus animi nemo natus sint dolore nisi expedita vel aspernatur aspernatur tenetur ipsa aut porro repudiandae rem eius exercitationem ipsum voluptatem a nobis provident sit beatae molestias perspiciatis unde rem hic voluptatem nostrum sit corrupti assumenda aut enim mollitia eligendi sit saepe placeat corporis nesciunt beatae quas aliquam voluptates nesciunt omnis officia minus quidem quae tempore reiciendis blanditiis asperiores sed omnis sit doloribus quam occaecati excepturi repellat ipsum recusandae harum beatae quam reiciendis ab sunt voluptate deleniti sunt expedita similique debitis dicta distinctio nisi maiores reiciendis unde reprehenderit ea nesciunt dicta esse laudantium ut iste odio modi quis cum quis doloribus sit incidunt aperiam ab rem eos officiis officiis nobis vel rerum fugiat commodi ea in debitis voluptatum error quisquam nobis ipsam iusto corrupti nulla odio numquam architecto optio earum eum id earum velit exercitationem temporibus veritatis nisi',
    date: new Date('2021-06-18T09:19:32.728Z'),
    category: 'all-open',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '17181',
        type: 'image',
        name: 'breed.jpg',
        size: '5mb',
        thumbnail: 'https://picsum.photos/seed/ZirYxsxDq/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=921767925252096',
      },
      {
        id: '91019',
        type: 'pdf',
        name: 'monthly_waterski_scientific.pdf',
        size: '2.5mb',
        thumbnail: 'https://picsum.photos/seed/jqqUdcb/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=229063834730496',
      },
    ],
  },
  {
    id: '5897721606',
    selected: false,
    title: 'Handcrafted Plastic Ball',
    firstName: 'Destinee',
    lastName: 'Predovic',
    email: 'Bettye25@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-15.webp',
    company: 'Huels - Schulist',
    markedAsRead: true,
    summary:
      'Nostrum aut ipsum magni. Eos maxime quo consectetur dolores facere itaque rem.',
    description:
      'aspernatur magni amet voluptatum quasi sint rem occaecati ipsa laudantium ullam iusto rerum consectetur eaque ex voluptatibus officiis omnis consequuntur inventore ipsa quod odit distinctio voluptatum architecto quasi repellat ipsum recusandae soluta ut ipsam laborum vero repellat deserunt iure maxime aliquam nihil natus reprehenderit nemo minus non excepturi tenetur repellat deserunt quis ea ipsam deleniti culpa minus voluptatum inventore consectetur eius nulla dolore eos enim labore eius excepturi illo eaque ipsa veniam placeat maxime ipsa consectetur laudantium in aliquid sit iusto voluptatem facilis aliquam sit recusandae tenetur necessitatibus repellendus aspernatur consequuntur impedit eveniet cum voluptatum perferendis optio ea similique consectetur laborum velit illum in asperiores voluptatem alias cumque repudiandae veniam cupiditate nulla neque molestias eligendi aspernatur praesentium eligendi dicta quae nulla nisi omnis aliquid quasi',
    date: new Date('2023-05-10T19:26:23.199Z'),
    category: 'email',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Email,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '84583',
        type: 'pdf',
        name: 'unto_blowhole_even.pdf',
        size: '3.8mb',
        thumbnail: 'https://picsum.photos/seed/XuutPsins/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=6320732808151040',
      },
    ],
  },
  {
    id: '8091810560',
    selected: false,
    title: 'Sleek Bronze Table',
    firstName: 'Jermain',
    lastName: 'Wolff',
    email: 'Jaylen.Orn@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-14.webp',
    company: 'Veum - Paucek',
    markedAsRead: true,
    summary:
      'Accusamus minus minus ratione sit temporibus cupiditate et. Minima pariatur nobis dolor distinctio soluta. Reiciendis ad dignissimos.',
    description:
      'atque quidem delectus vitae nostrum eius tempore porro reprehenderit ducimus odit adipisci reprehenderit facere rerum sit numquam magni quos voluptatum consequuntur mollitia sunt nostrum dolorum tempora placeat adipisci ab sapiente sequi similique saepe dolor suscipit at maxime inventore minus voluptates necessitatibus aliquid ea quia aut tenetur illum ullam quas minus enim nulla qui impedit a voluptatibus dolore ex praesentium nam velit blanditiis veritatis culpa voluptas laborum facere aliquid voluptatibus hic debitis doloremque natus commodi reprehenderit perferendis qui accusamus officiis necessitatibus quas delectus earum vitae recusandae natus deserunt tenetur doloremque iusto voluptates debitis molestiae placeat delectus eum explicabo rem consequuntur velit dolore deleniti placeat nobis consectetur in dicta excepturi nisi porro in modi quidem natus optio libero unde accusamus corporis blanditiis ad eveniet eveniet beatae repellendus possimus voluptates minima libero consequuntur dignissimos sint eligendi quo accusantium eius voluptate tempora commodi sint dolore quidem facere ratione tempore culpa labore et asperiores voluptatem enim iste',
    date: new Date('2023-03-24T19:54:04.924Z'),
    category: 'unassigned',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '48191',
        type: 'image',
        name: 'lightly_comfortable.jpg',
        size: '8.4mb',
        thumbnail: 'https://picsum.photos/seed/5BwJAFpC/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=453126484131840',
      },
      {
        id: '33467',
        type: 'pdf',
        name: 'calmly_versus.pdf',
        size: '2.1mb',
        thumbnail: 'https://picsum.photos/seed/78Yrw/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=128075442421760',
      },
    ],
  },
  {
    id: '3990395021',
    selected: false,
    title: 'Small Metal Car',
    firstName: 'Casey',
    lastName: 'Torp',
    email: 'Brycen.Rogahn86@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-06.webp',
    company: 'Altenwerth Inc',
    markedAsRead: true,
    summary:
      'Odit consequatur eligendi in magni laborum est blanditiis quisquam quam. Quae nobis dolor corporis ut.',
    description:
      'ab blanditiis voluptas soluta at natus commodi iure repellat nisi necessitatibus minus tempora minima consequatur dolor dolore nihil molestias maiores tempora necessitatibus sit architecto numquam libero consequuntur aliquid ut natus cupiditate vitae aut occaecati voluptas porro distinctio blanditiis voluptas enim odio sapiente beatae molestias cumque enim ducimus iusto hic aperiam a praesentium aut sapiente alias quaerat quaerat laborum tempore a sapiente sed quibusdam libero neque doloribus nostrum quibusdam explicabo laudantium eum nemo corporis quos incidunt omnis impedit quae praesentium sequi officiis animi molestiae ipsum unde delectus excepturi odit quae doloribus sint necessitatibus omnis incidunt deserunt mollitia enim saepe mollitia consequuntur modi dolores cupiditate assumenda dolore natus explicabo in placeat provident natus laudantium et debitis vel corporis eos dolor laboriosam praesentium inventore nam dolores quisquam animi id dolores illo illum mollitia veritatis placeat minima nulla nulla consectetur repellat cum tempora iusto consequuntur sapiente sunt possimus cumque quidem quis aspernatur et quaerat dignissimos autem placeat ullam qui ullam nulla eius praesentium dolorum aperiam nesciunt accusantium dicta aperiam aut ipsa reprehenderit adipisci in distinctio maiores consequatur at quo tempora earum incidunt explicabo tempora esse pariatur nostrum omnis',
    date: new Date('2022-06-05T02:31:25.635Z'),
    category: 'unassigned',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Email,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '03931',
        type: 'pdf',
        name: 'unibody.pdf',
        size: '6.6mb',
        thumbnail: 'https://picsum.photos/seed/qiAzKnkwF/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=6234874235060224',
      },
    ],
  },
  {
    id: '3806124955',
    selected: false,
    title: 'Incredible Rubber Pizza',
    firstName: 'Aric',
    lastName: 'Conn',
    email: 'Karelle13@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-07.webp',
    company: 'Parisian - Bergnaum',
    markedAsRead: false,
    summary:
      'Accusamus enim soluta nostrum reiciendis. Laudantium ea itaque animi optio magnam beatae velit ipsa minima. In sequi nemo sequi officia repellat pariatur placeat.',
    description:
      'earum debitis in voluptate voluptas natus nesciunt architecto et vitae porro assumenda adipisci aut nihil quaerat facere recusandae in adipisci omnis sed asperiores illo veniam omnis reprehenderit amet cumque praesentium provident quae sequi blanditiis repudiandae quae et facilis et ducimus amet commodi dolor sunt optio corporis aliquam nostrum ipsum sunt vero accusantium quibusdam impedit veritatis incidunt neque possimus nostrum voluptatum aliquid totam repellendus incidunt maxime non sapiente velit ea repudiandae ipsam pariatur alias rerum officia libero dignissimos odio dignissimos eaque alias veritatis fuga natus impedit ex iure quibusdam repudiandae ipsam cumque aspernatur similique quod consequuntur odit nihil amet laboriosam asperiores quo laboriosam odit ex dolorem quam in molestias veniam aspernatur aperiam commodi laudantium quam quis voluptas adipisci inventore aliquam deleniti esse porro cumque aut deserunt voluptas aut aperiam rerum quam impedit molestias nisi quisquam ratione rerum minima provident assumenda earum facere quibusdam suscipit pariatur voluptates dolorum repellendus cumque explicabo reiciendis porro sit corrupti neque nulla rerum quae quis at voluptas voluptatem provident sint ducimus perferendis aperiam vero unde officia rem aperiam mollitia nulla qui sint eius ducimus amet autem temporibus illum distinctio eligendi delectus numquam sed rerum illo aperiam odit consequuntur a cupiditate sed perferendis aliquam nesciunt consequuntur blanditiis voluptatem quasi rem a quia doloribus occaecati nihil doloribus saepe earum tempore accusantium nisi corrupti minus accusamus labore nam possimus quam molestiae illo perspiciatis magni provident facilis recusandae assumenda animi similique',
    date: new Date('2022-11-10T07:13:55.540Z'),
    category: 'assigned-to-me',
    hasAttachments: true,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '42270',
        type: 'image',
        name: 'highly.jpg',
        size: '4.7mb',
        thumbnail: 'https://picsum.photos/seed/vgolMiGkm7/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=4835715737190400',
      },
      {
        id: '01673',
        type: 'pdf',
        name: 'ick.pdf',
        size: '3.4mb',
        thumbnail: 'https://picsum.photos/seed/3GHBx6Btjp/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=7789552330604544',
      },
    ],
  },
  {
    id: '0251448815',
    selected: false,
    title: 'Electronic Rubber Chicken',
    firstName: 'Nickolas',
    lastName: 'Pouros',
    email: 'Rebeka99@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-08.webp',
    company: 'Schuster - Adams',
    markedAsRead: false,
    summary: 'Perferendis quidem quidem. Minus aliquid aut.',
    description:
      'ut quae atque aliquam nisi aliquam quod sunt cupiditate quisquam nulla quae repellendus perferendis libero cum placeat earum temporibus eum quae aliquid cumque perferendis incidunt facilis suscipit necessitatibus dolor animi at quis dolore nisi facere rem vitae blanditiis deleniti explicabo ipsam cupiditate veniam rerum placeat reprehenderit praesentium quas iste in explicabo quaerat quae nemo aperiam sunt et error ducimus dolor assumenda amet repellat optio veniam dicta sint minima sit cumque nostrum architecto accusantium expedita corrupti eveniet harum tempore adipisci minus eligendi explicabo iste exercitationem tempore aut voluptatum totam iusto optio nam provident repellendus alias libero numquam explicabo tenetur provident dolorem adipisci ratione eos placeat harum aut quibusdam atque voluptatum minima ex architecto at omnis libero quos reiciendis voluptatem voluptates mollitia atque animi corporis debitis ducimus sapiente aliquid illum est sapiente id nesciunt adipisci a atque cumque vel eum necessitatibus voluptate est sequi labore quia id consequuntur quas perspiciatis modi earum facere occaecati possimus quibusdam veritatis maxime porro laboriosam beatae eos vel quos exercitationem aliquid possimus labore nostrum odio impedit alias quae illum sequi est commodi sed quis dignissimos omnis nihil commodi blanditiis sint aspernatur quae dolorem nostrum eum aperiam autem laborum perspiciatis occaecati at nesciunt quidem debitis facilis tempore doloremque aliquid iure minus ab consectetur fugiat sint nihil vero ab quisquam repudiandae vitae illum dolorem quasi nostrum libero numquam quam iusto suscipit molestiae quos itaque voluptas',
    date: new Date('2021-04-22T14:53:52.873Z'),
    category: 'email',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Email,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '79509',
        type: 'pdf',
        name: 'memorize_unlucky.pdf',
        size: '9.9mb',
        thumbnail: 'https://picsum.photos/seed/uKS9xT2Rg/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=2999182881193984',
      },
    ],
  },
  {
    id: '4953163563',
    selected: false,
    title: 'Practical Frozen Bacon',
    firstName: 'Ricardo',
    lastName: 'Abernathy',
    email: 'Enid.Koch@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-09.webp',
    company: 'Zemlak LLC',
    markedAsRead: false,
    summary:
      'Atque blanditiis modi fuga tempore quis ipsam corrupti. Nihil ab earum excepturi.',
    description:
      'doloremque praesentium hic beatae ducimus modi illum harum culpa praesentium odit dolor asperiores illo nulla tempora vitae suscipit explicabo cumque eligendi sunt minima reiciendis voluptatibus facilis harum nemo cupiditate eum ipsa deserunt laborum sint aperiam consectetur possimus reiciendis eum maxime officiis illo impedit doloremque maxime nesciunt reiciendis officia natus eveniet aspernatur maxime accusamus ipsa laborum deleniti commodi impedit reprehenderit quod ipsum amet magni eius fugiat quia est earum dignissimos eaque rem totam quia eos inventore rem quis corrupti eveniet perspiciatis dignissimos ad quasi laboriosam consequatur autem quasi amet a illum praesentium ut reprehenderit facilis natus veritatis quas reiciendis provident et reiciendis quia placeat voluptatem explicabo praesentium excepturi hic porro accusantium dolorum quasi maiores facere porro ipsam necessitatibus illo autem possimus quam eos sapiente unde eaque earum autem alias accusamus quae error dolorem minima facere illum quos id ducimus ea eius dolorem tempore cum dicta deleniti temporibus excepturi blanditiis ipsa nulla aliquam magni rem quisquam sint eaque voluptatibus neque soluta delectus quisquam fugiat quo sit distinctio vero quos optio odit cupiditate earum recusandae ullam minus maiores nemo optio nisi necessitatibus cum necessitatibus laudantium cupiditate dicta labore perspiciatis praesentium recusandae excepturi beatae ipsa nisi sunt aspernatur molestias aut totam impedit maxime perspiciatis velit eveniet culpa odit ab magnam quaerat a quam neque modi culpa nisi autem aperiam veniam vel adipisci neque sunt soluta nostrum repellat quos vitae itaque quidem soluta eius libero assumenda expedita voluptates veritatis repellat dolores rem deserunt voluptate expedita eveniet nostrum ratione dolore incidunt beatae quam et incidunt maxime atque facilis alias vel perspiciatis laboriosam totam vitae cumque asperiores maxime quas dolores velit eveniet laborum doloremque incidunt ad adipisci dolore illum ea illo illum fugit similique ut nulla quasi voluptatibus culpa suscipit nesciunt similique expedita consequatur magnam maxime est minima aut numquam consequuntur voluptatem quas fugit quidem beatae nobis eveniet vitae ipsum nesciunt nemo ex quas debitis tempore aliquid pariatur voluptatem dolorum sed fugiat quis tempora laudantium magnam iusto ipsum autem odit expedita similique fugiat officia ipsum facilis ipsum quis soluta maiores ipsum facilis aperiam eligendi quam reiciendis blanditiis fugit eaque dolorum facilis veritatis dignissimos porro illum quo deleniti placeat laborum commodi maxime laboriosam numquam impedit nesciunt dolorum sed error maxime sapiente sunt sequi quasi eos quos quos rem asperiores occaecati ratione voluptates laudantium minus ipsum modi exercitationem deleniti atque deleniti nisi id vero architecto animi minima quaerat doloribus eos blanditiis saepe minima quos perspiciatis cupiditate blanditiis illo officia temporibus quia magnam maxime modi sapiente tenetur quidem velit quo nam esse eaque nemo commodi iure ex fuga minus corporis harum excepturi deleniti quos est reprehenderit reiciendis quae ut nesciunt velit officia corrupti quod error quasi iusto autem corporis maxime voluptatem nam atque reiciendis consequuntur',
    date: new Date('2022-03-26T00:54:36.767Z'),
    category: 'assigned-to-me',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '90863',
        type: 'pdf',
        name: 'whereas_townhouse_boldly.pdf',
        size: '2.2mb',
        thumbnail: 'https://picsum.photos/seed/hJWSY6zdT/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=7390591035899904',
      },
      {
        id: '65894',
        type: 'image',
        name: 'sedately_hence_jump.jpg',
        size: '9.4mb',
        thumbnail: 'https://picsum.photos/seed/Dsj9D5/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=7839574323625984',
      },
    ],
  },
  {
    id: '3663658093',
    selected: false,
    title: 'Modern Steel Sausages',
    firstName: 'Cecilia',
    lastName: 'Lehner',
    email: 'Ethyl_Kihn98@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
    company: 'Kuphal, Lind and Blick',
    markedAsRead: true,
    summary:
      'Atque nemo voluptatum quibusdam ducimus. Quaerat vero dolorem fugiat.',
    description:
      'vitae nobis porro in a explicabo expedita repellendus rerum nostrum fuga totam est quam libero blanditiis dolores rerum dolorem eaque enim modi non ullam commodi quod quis excepturi suscipit asperiores accusantium corrupti aut et voluptatum libero asperiores iusto dolore excepturi ipsa deleniti totam voluptatum dolore placeat dolore adipisci repudiandae aliquam dolore impedit ex et consequatur tempora modi molestias voluptatem aut veniam debitis non est expedita at accusamus repellat quas impedit modi corrupti sint dolorum modi error ipsum totam adipisci asperiores voluptates velit provident quam nobis eius dolorum eius necessitatibus libero officia nulla ullam ea dolores odio reprehenderit occaecati sint corporis commodi quod amet porro rem quis in autem incidunt debitis provident iusto qui blanditiis magni ratione dolor laudantium magni dicta at dolores doloribus iusto asperiores pariatur tempora repellat ducimus at iste animi architecto distinctio debitis nemo nesciunt placeat magnam rem labore nisi eveniet rerum sint tenetur aperiam voluptate magnam magni dolor vitae consequatur sed fugiat voluptates architecto quia doloribus perspiciatis eos doloribus nostrum dolor ut quidem amet sunt architecto nihil eum earum possimus qui numquam sed earum dolorem cumque possimus ut asperiores nam eos iste quidem fugiat quidem voluptas quas adipisci architecto sequi totam laboriosam necessitatibus in architecto architecto iusto voluptates itaque cumque placeat non debitis omnis aperiam quas neque tempore illum deleniti voluptate beatae sint numquam veritatis quisquam dicta quasi esse voluptatem voluptatem consectetur illum aspernatur nisi repudiandae accusantium consectetur commodi nulla tenetur accusantium ducimus atque enim saepe autem rem perferendis a modi dolor reprehenderit quos consequuntur natus labore quae ratione quia autem earum nostrum suscipit sequi voluptate excepturi eaque inventore cupiditate eum doloribus inventore perferendis recusandae necessitatibus voluptate modi exercitationem impedit quasi totam quasi dicta officiis sapiente temporibus voluptatem recusandae suscipit esse aliquam culpa occaecati deserunt neque adipisci eaque in dolorem ipsum unde enim ducimus expedita ut vitae earum suscipit aut atque rerum eveniet deleniti qui voluptates reprehenderit non occaecati incidunt quidem recusandae tempora dolores ex rerum eaque vero magni labore repellendus at asperiores sequi nulla qui nesciunt ullam ipsum praesentium ipsam dicta in sit voluptas corporis architecto pariatur assumenda minus natus amet ut voluptatum reiciendis dolorem minus sint libero non ipsam ad vitae exercitationem suscipit voluptates animi aspernatur libero',
    date: new Date('2022-12-17T13:28:21.945Z'),
    category: 'chat',
    hasAttachments: true,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '83674',
        type: 'pdf',
        name: 'since_retch_when.pdf',
        size: '6.1mb',
        thumbnail: 'https://picsum.photos/seed/y3EqTnVd/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=309654246653952',
      },
      {
        id: '51145',
        type: 'image',
        name: 'phooey_freezing.jpg',
        size: '5.9mb',
        thumbnail: 'https://picsum.photos/seed/VIi3G/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=1203371495129088',
      },
    ],
  },
  {
    id: '1919515230',
    selected: false,
    title: 'Small Soft Shirt',
    firstName: 'Deondre',
    lastName: 'Fahey',
    email: 'Garth68@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
    company: 'Champlin - Dare',
    markedAsRead: true,
    summary:
      'Possimus ad tenetur officia vero dolorum consequuntur reprehenderit. Illo minus alias asperiores ad placeat in.',
    description:
      'laborum sed maxime sequi inventore reiciendis adipisci nulla facilis illum incidunt rem earum optio nihil nostrum perspiciatis provident quas occaecati eum dolor optio rerum ipsa neque quibusdam odio officiis tempore provident pariatur magnam dolorem aliquid dicta tenetur explicabo nesciunt illo eligendi veritatis veniam aut nemo quisquam officia rem perspiciatis neque velit veritatis nostrum neque vitae consequuntur quasi pariatur facere sequi modi ut voluptate animi quos quia cum molestias quaerat reprehenderit distinctio voluptas debitis quas aut quaerat veritatis nobis mollitia labore doloribus quasi sequi repellat eaque optio quaerat doloribus maxime distinctio aliquid ex asperiores voluptates quibusdam eum ipsum reprehenderit quis molestiae repudiandae sint cupiditate consectetur nesciunt animi temporibus adipisci labore incidunt ad itaque nesciunt labore quae asperiores expedita placeat cum eius ut omnis enim ab minima consequuntur labore similique dolorem accusamus ea beatae numquam laudantium vero incidunt et amet corporis error harum assumenda ex odio praesentium ex reprehenderit minus debitis libero sunt impedit eos suscipit nulla veritatis in ab sint voluptatum sequi sequi cum explicabo culpa possimus nihil optio sit quod iusto quas et suscipit itaque ab quisquam cumque hic voluptate mollitia quae quam saepe accusamus esse sint porro labore quibusdam consequatur error doloribus facilis eveniet reprehenderit dolorum dolore vero corporis vero officia rem mollitia suscipit doloribus illo hic architecto dolorem voluptates',
    date: new Date('2022-11-15T06:47:52.056Z'),
    category: 'unassigned',
    hasAttachments: false,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '24238',
        type: 'pdf',
        name: 'mood.pdf',
        size: '7.9mb',
        thumbnail: 'https://picsum.photos/seed/OCq7xh8OM3/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=1799404755353600',
      },
    ],
  },
  {
    id: '4499406295',
    selected: false,
    title: 'Recycled Rubber Bike',
    firstName: 'Dayana',
    lastName: 'Von',
    email: 'Connie.Will@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
    company: 'Douglas LLC',
    markedAsRead: false,
    summary:
      'Saepe corrupti corrupti eos. Illo cumque quae deleniti officia ratione cupiditate delectus unde dolores. Provident delectus et quidem laboriosam neque aut ex earum.',
    description:
      'voluptatibus blanditiis maxime esse a deserunt accusantium consequuntur accusamus ipsam laborum itaque animi facere repellat accusantium saepe facere praesentium in praesentium eaque tempora excepturi atque repudiandae asperiores mollitia nostrum perferendis voluptas deserunt voluptate iusto suscipit quaerat corporis nam unde est explicabo ex optio aliquid vitae itaque deserunt alias voluptates laborum laudantium nemo vero suscipit explicabo sint nam odit soluta quos modi vel dolor at eos in deleniti facilis maiores odit qui aut nemo animi tempore placeat veniam corrupti unde vero dolores est placeat architecto consequatur voluptatem sunt doloremque perferendis totam rerum enim ea quas non sapiente reprehenderit eveniet enim libero qui architecto repellendus exercitationem aliquam eveniet quia sint aliquam officiis autem atque dolor eaque omnis repudiandae neque laudantium officiis laboriosam in natus molestiae ad aliquid est quisquam nam cum asperiores error non assumenda enim dolorum maxime assumenda eveniet molestias dolor ad illum ratione deleniti natus perferendis aperiam blanditiis voluptate natus dicta ea nemo ipsum fuga laudantium ipsam odio perspiciatis ratione error impedit hic similique libero provident natus dolorum sunt ipsa voluptatem voluptatibus fugit ducimus et molestias atque voluptatum eius mollitia accusamus soluta minima explicabo provident perferendis molestias delectus praesentium repellendus quaerat eius fugit itaque iusto sint recusandae molestias omnis voluptatibus quis numquam quos quisquam eaque nesciunt iure est ipsam officia quidem at consequuntur natus minus eum inventore officiis exercitationem sapiente assumenda ex debitis dolore temporibus iusto accusamus maiores adipisci dolore molestiae magni quia voluptatibus quam magnam quae voluptatum similique quam dignissimos exercitationem veniam natus enim eligendi adipisci libero itaque officiis unde nihil aspernatur illum impedit voluptatibus eius dolore nobis quia ullam distinctio incidunt nobis ullam maxime nisi atque repellat maiores a laboriosam iste quam sed sit deleniti occaecati tempora molestias nihil sint repellendus hic dolore laboriosam reiciendis cum nulla excepturi soluta possimus tenetur voluptatibus sed at incidunt hic at cupiditate placeat rerum ullam neque debitis dolores quisquam voluptatem voluptates aliquid culpa error voluptatem sunt consequuntur assumenda assumenda nemo quos unde quam delectus consequatur nostrum natus sed dolore non totam minus labore nesciunt labore earum nostrum deleniti officiis aliquam veniam',
    date: new Date('2022-10-23T16:35:17.802Z'),
    category: 'unassigned',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Email,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '46978',
        type: 'pdf',
        name: 'woot.pdf',
        size: '4.6mb',
        thumbnail: 'https://picsum.photos/seed/SIJgqZ2GSk/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=2147265051361280',
      },
    ],
  },
  {
    id: '2723338872',
    selected: false,
    title: 'Bespoke Steel Fish',
    firstName: 'Sandy',
    lastName: 'Hane',
    email: 'Torrance.Beier@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
    company: 'King - Wolff',
    markedAsRead: false,
    summary:
      'Explicabo praesentium explicabo facilis. Sunt alias impedit ipsum maiores officiis culpa beatae.',
    description:
      'occaecati animi ratione sequi sed quos temporibus aut consequuntur nesciunt perferendis aperiam perferendis odio ipsam nemo sunt molestias beatae enim adipisci quod unde sunt incidunt repellat dolores illum aut cumque at labore commodi unde repellat blanditiis recusandae sapiente ex ab blanditiis laboriosam est ex eius id quod iste occaecati tempora nostrum suscipit aperiam quas ipsum quia libero harum numquam tempora repellat temporibus ab illo omnis repellat doloremque sed corrupti at sunt enim eveniet explicabo ipsam quos amet debitis distinctio incidunt sint eligendi soluta sunt dolorem est ratione quos odio delectus provident vel rerum omnis laboriosam voluptatibus iure quisquam quia ducimus sit cumque adipisci voluptatem cum optio mollitia expedita exercitationem sequi animi blanditiis ea eos sit quos itaque facilis ratione eligendi qui doloribus ex facere dolorem enim accusamus sint quam expedita assumenda tenetur a non est maxime incidunt debitis est corporis dolorem nam eius qui odio voluptas neque tempora eaque corporis minus veniam quo facere maxime laboriosam atque ad molestiae nihil velit porro quia mollitia illum soluta laboriosam ipsa molestias cupiditate eos vero doloribus perspiciatis nostrum reiciendis sapiente magni aut voluptatibus debitis inventore consequatur consectetur ad minima occaecati assumenda esse doloremque consectetur quo ad consequuntur non beatae optio et alias minus cumque nostrum velit rerum nobis molestiae dolorem neque reiciendis ad voluptate ab quas amet optio repellat sit aperiam modi ad dicta blanditiis iure commodi porro fuga dicta in sequi minus accusamus dolorum eius libero dicta ipsa a veniam debitis laudantium vero aperiam cumque fugiat dicta consectetur hic aperiam sed reprehenderit facere minima iusto eum doloremque quae quia ab a pariatur assumenda aperiam quasi iusto corporis porro commodi repellendus veritatis corporis totam mollitia quae earum accusamus id porro odit incidunt neque vitae laudantium suscipit possimus magni incidunt modi dicta rerum occaecati nesciunt aut dolores id nam omnis magnam velit sed delectus dolore consectetur assumenda facere earum nam corporis magnam dicta qui facere eum doloremque nobis praesentium quaerat odit ratione reiciendis voluptas quasi ipsam assumenda enim fuga expedita repudiandae aliquam quod nulla sint exercitationem repellat voluptatem beatae assumenda labore totam modi cumque est rerum aperiam facilis numquam aperiam rerum dignissimos dolore dignissimos neque officia culpa delectus quidem laborum quisquam illo vero veniam eos mollitia commodi reprehenderit ipsum quibusdam laudantium facilis quia aliquid delectus sit accusantium totam qui est fuga eum fugit harum rem assumenda at suscipit quas molestias qui esse ipsa minima sequi corrupti voluptates debitis aperiam ratione accusamus dolor eius itaque quos reiciendis omnis blanditiis tempore reiciendis officia animi quod doloremque hic dignissimos repellendus possimus nam totam aut hic voluptatem consectetur corrupti enim impedit hic nostrum quia fugit in commodi ratione quo quis sapiente sequi tenetur maxime ex architecto voluptate atque dolorum modi sed at odit corrupti ut iure cupiditate dolorem culpa sint incidunt eius occaecati',
    date: new Date('2021-05-06T02:33:41.647Z'),
    category: 'assigned-to-me',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '25392',
        type: 'pdf',
        name: 'gargle.pdf',
        size: '1.4mb',
        thumbnail: 'https://picsum.photos/seed/OSWrTy/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=4915792715972608',
      },
    ],
  },
  {
    id: '1596415216',
    selected: false,
    title: 'Unbranded Granite Shoes',
    firstName: 'Jackson',
    lastName: 'Schuster-Willms',
    email: 'Bennie_Anderson23@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
    company: 'Konopelski - Schmidt',
    markedAsRead: false,
    summary:
      'Quo neque numquam temporibus sunt. Voluptates earum odit aperiam voluptatum vitae cum odit id. Saepe voluptatibus sapiente.',
    description:
      'corrupti vel exercitationem cupiditate laborum soluta quae dolore repellat dignissimos odio quia pariatur in sint expedita quos illo cupiditate vel aperiam suscipit pariatur odit aut eaque ducimus totam iste sed molestiae culpa cum eaque harum ipsam tempore odio facilis atque iusto totam officiis non sit autem commodi itaque dolorum architecto eum dolor natus molestias occaecati velit ipsam nostrum optio accusamus fugit odit mollitia ipsa temporibus eligendi laudantium rerum porro temporibus tempora quibusdam expedita impedit nobis corporis laudantium assumenda illo repellendus aliquam necessitatibus ea odio nemo laborum saepe eaque ratione necessitatibus ab aliquid consequuntur asperiores corrupti natus quaerat quis laudantium ducimus cupiditate magnam consequatur enim consequatur rem ex molestias veritatis ea ea asperiores corporis fugiat nemo sapiente expedita itaque iusto totam omnis ducimus minima ratione cum rerum quisquam laborum reiciendis magnam veniam iure error nisi praesentium',
    date: new Date('2022-08-17T05:53:12.580Z'),
    category: 'assigned-to-me',
    hasAttachments: true,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '91591',
        type: 'image',
        name: 'owe.jpg',
        size: '9.4mb',
        thumbnail: 'https://picsum.photos/seed/3MFW9Kkb/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=2851819386568704',
      },
      {
        id: '35817',
        type: 'pdf',
        name: 'courageously.pdf',
        size: '5.9mb',
        thumbnail: 'https://picsum.photos/seed/uQCSIJsK8/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=3797610508845056',
      },
    ],
  },
  {
    id: '2158640005',
    selected: false,
    title: 'Generic Cotton Mouse',
    firstName: 'Lavon',
    lastName: 'Gislason',
    email: 'Francisca_Koelpin77@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
    company: 'Gerlach LLC',
    markedAsRead: false,
    summary:
      'Fuga cupiditate assumenda laborum nihil beatae. Tempore quos aliquam.',
    description:
      'quisquam non rem perferendis consectetur cum consequatur veniam similique provident necessitatibus consequuntur beatae dicta illo incidunt doloremque natus aperiam veniam facere recusandae occaecati aperiam inventore quisquam veritatis earum omnis omnis similique excepturi vel numquam dolorem reprehenderit soluta veniam impedit quos doloremque suscipit quos nesciunt incidunt natus sapiente mollitia perferendis animi nihil vel numquam quisquam nam atque odit perferendis veritatis placeat quo inventore doloremque dolor enim odit ab ex sed amet iste impedit fugit esse amet et assumenda consequatur incidunt asperiores eum iusto provident reiciendis maxime earum excepturi laboriosam cupiditate aliquid quos ducimus quos tempora atque distinctio exercitationem illum reprehenderit optio distinctio reprehenderit doloremque blanditiis sunt corporis ratione omnis et adipisci dolores distinctio qui itaque nemo eligendi fuga sequi facere natus modi magnam dolorum neque asperiores animi quasi nesciunt quae officia blanditiis nulla quibusdam ab perspiciatis rem veniam iusto odit saepe aspernatur quod cupiditate cumque velit est ex modi magni et maiores accusamus in beatae quia reiciendis eaque ab possimus veritatis quae aut quam minus incidunt nihil incidunt iste expedita asperiores harum perspiciatis voluptatem dolore asperiores possimus excepturi repudiandae ipsum necessitatibus quas aut eveniet distinctio alias minus sint autem rem harum numquam qui aut at accusamus quas quos delectus sed necessitatibus deserunt dolore neque quos officiis dolor deserunt non hic maxime alias similique aut nesciunt incidunt eius error odit sit ipsam eius quia dicta earum cumque tenetur doloribus autem ratione dolore vero velit fugiat natus iure provident ab explicabo inventore',
    date: new Date('2023-01-07T19:15:26.517Z'),
    category: 'email',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '10126',
        type: 'image',
        name: 'seemingly_sans.jpg',
        size: '6.3mb',
        thumbnail: 'https://picsum.photos/seed/ttilO0en/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=6255646599020544',
      },
      {
        id: '39640',
        type: 'pdf',
        name: 'unless_hm.pdf',
        size: '8.5mb',
        thumbnail: 'https://picsum.photos/seed/O10DfJ7/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=8478731286872064',
      },
    ],
  },
  {
    id: '4731249704',
    selected: false,
    title: 'Luxurious Rubber Table',
    firstName: 'Cole',
    lastName: 'Padberg',
    email: 'Kristina.Rutherford31@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp',
    company: 'Crist LLC',
    markedAsRead: false,
    summary: 'Soluta atque omnis ea aliquid. Dolorum quis perferendis.',
    description:
      'sit asperiores voluptate suscipit consequuntur repellendus culpa iure numquam voluptate quidem animi repudiandae quasi nemo laudantium qui aliquam cum quo voluptatibus quae voluptatum ipsam esse repellat vitae doloremque repellat rem impedit voluptates beatae explicabo atque harum expedita provident ratione suscipit quia fugiat pariatur explicabo quidem rem eaque sint corrupti ratione ab ex nulla inventore sed at eos ipsam optio voluptatem vitae placeat suscipit illum expedita velit quod ea minima minus necessitatibus in perspiciatis laborum deleniti dolores molestias ab molestias culpa temporibus tempora labore eligendi soluta fugiat unde repudiandae cumque eligendi sapiente aspernatur ipsam labore esse error necessitatibus neque eum vitae',
    date: new Date('2021-12-22T20:12:59.787Z'),
    category: 'assigned-to-me',
    hasAttachments: false,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '19191',
        type: 'pdf',
        name: 'deliberately.pdf',
        size: '8.9mb',
        thumbnail: 'https://picsum.photos/seed/ZCkFwCg7a/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=4682974486331392',
      },
    ],
  },
  {
    id: '5902575859',
    selected: false,
    title: 'Modern Rubber Cheese',
    firstName: 'Clinton',
    lastName: 'Ullrich',
    email: 'Ivah.Gerhold79@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-09.webp',
    company: 'Stroman LLC',
    markedAsRead: true,
    summary:
      'Repudiandae facilis optio quas hic est saepe ratione. Occaecati quod illum odio ducimus est.',
    description:
      'nihil sapiente inventore eius harum cupiditate itaque provident quo ipsum similique veniam ea aspernatur ad aspernatur autem atque porro occaecati eos magni rerum minima facere maiores delectus deleniti minima deserunt esse aliquid architecto itaque nesciunt veniam recusandae quo ut atque inventore enim consectetur alias id eius eaque beatae ex dolorem nemo nihil iusto quis excepturi eius nobis qui ab expedita ullam tempora maxime aliquid rerum reiciendis quae vero soluta nobis numquam aperiam tempora soluta dignissimos sunt quos esse laboriosam adipisci explicabo doloribus dolore quos facere quas facilis et provident eos officiis veritatis qui doloremque quis magnam perspiciatis dolorem dolores tempora est molestias odit voluptates accusamus possimus magnam quod repellendus nam tenetur quo accusamus dolorum voluptas ipsa officia dolor ut optio dicta accusantium porro tempora porro nihil nostrum nesciunt dignissimos assumenda blanditiis pariatur expedita distinctio ea maiores cupiditate cupiditate id quia eius id quod vel voluptatum perferendis ipsum officia quisquam modi reprehenderit sunt a occaecati quae voluptas et illum mollitia reiciendis vero illum similique molestiae',
    date: new Date('2023-06-06T04:45:08.152Z'),
    category: 'assigned-to-me',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Chat,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '10423',
        type: 'image',
        name: 'hence.jpg',
        size: '6mb',
        thumbnail: 'https://picsum.photos/seed/syL23aX2/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=2496211787448320',
      },
    ],
  },
  {
    id: '6291481873',
    selected: false,
    title: 'Modern Plastic Pants',
    firstName: 'Loraine',
    lastName: 'Daugherty',
    email: 'Dan_Schaden-Zemlak18@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp',
    company: 'Wuckert, Heaney and Gulgowski',
    markedAsRead: false,
    summary:
      'Ratione ipsum voluptatibus voluptatum amet vero maiores. Magni beatae consequatur iste ullam voluptate sapiente.',
    description:
      'quas consequuntur dolores placeat repellat necessitatibus tenetur eaque tempore doloribus perferendis maxime nisi quidem magni doloribus non totam natus consectetur maiores vel quam blanditiis suscipit odio omnis odit animi repellat exercitationem sapiente quasi necessitatibus incidunt consequuntur voluptatum porro officia ducimus illo nisi mollitia mollitia nihil adipisci minima praesentium quisquam autem excepturi voluptates incidunt et sit esse accusamus maiores suscipit error vel amet nisi fugit debitis fugiat provident alias mollitia harum tempore reiciendis illum voluptatem necessitatibus ad debitis autem tempore praesentium ad non doloremque reiciendis repellendus ex incidunt repudiandae ipsum consequuntur dolor nemo laborum occaecati ut mollitia doloribus ducimus maxime aspernatur dolorem ea repellendus quaerat ipsa quidem libero delectus reiciendis eius deserunt maiores id non laudantium soluta maiores quas cumque suscipit tenetur harum neque vero quod quas qui voluptatem consequuntur quam dolore dolores illo praesentium facilis magnam facere',
    date: new Date('2023-04-10T14:31:57.823Z'),
    category: 'unassigned',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '83201',
        type: 'image',
        name: 'nifty_hungrily_save.jpg',
        size: '7.5mb',
        thumbnail: 'https://picsum.photos/seed/HN2LwYqc/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=3207768928419840',
      },
    ],
  },
  {
    id: '4349255765',
    selected: false,
    title: 'Licensed Steel Computer',
    firstName: 'Jaron',
    lastName: 'Klein',
    email: 'Yazmin90@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-06.webp',
    company: 'Tromp - Koss',
    markedAsRead: false,
    summary:
      'Maxime soluta maiores. Ipsa reprehenderit optio. Ducimus ab beatae.',
    description:
      'voluptatibus autem at voluptatum sed voluptates aliquid nisi ab hic ut quos dolor blanditiis odio eaque accusamus blanditiis temporibus sit est eum eum mollitia eligendi hic illum aliquid nesciunt nihil neque laudantium unde neque repudiandae accusantium occaecati tenetur libero labore soluta repellat eos laboriosam nobis blanditiis adipisci enim voluptate adipisci sit magnam quod blanditiis beatae at suscipit quia aspernatur quam quas facilis illo corrupti autem eligendi enim possimus voluptatibus magnam temporibus rem quia voluptates delectus possimus quasi a dignissimos perferendis numquam accusantium distinctio eveniet ullam dolorem repellat facilis perspiciatis temporibus quaerat est consequuntur soluta fugiat accusantium iusto corporis odit ipsam expedita iure odit suscipit inventore nulla blanditiis reprehenderit at repellendus ducimus quod libero aperiam accusantium tenetur nemo at voluptatibus voluptatum iusto dolore maiores nesciunt repellendus repudiandae soluta veniam maiores ullam fugiat quia magnam quidem praesentium dolore doloribus officia nam libero nobis illum dolores debitis provident animi iste magni blanditiis pariatur incidunt dolorem voluptatem unde pariatur doloribus molestias nam error eum autem dignissimos minus laboriosam eveniet modi autem tenetur dolores laborum qui doloremque est commodi doloremque consequatur laborum dignissimos debitis soluta temporibus similique ea ex modi quisquam tempore provident molestiae at laudantium delectus sunt vero omnis occaecati pariatur debitis accusamus provident perferendis consequuntur sit blanditiis nesciunt natus quos accusantium voluptatum dolorum et amet similique debitis magnam cum perferendis magnam adipisci nam debitis nostrum repudiandae placeat minima illum odio cupiditate repellendus ipsa tempore nemo illo deleniti nostrum ad illum neque autem a alias quidem occaecati tempore nemo nisi iste libero impedit iste et aliquid occaecati blanditiis nihil deserunt perferendis recusandae consequuntur cupiditate corrupti distinctio numquam iusto ex magnam sapiente inventore architecto corporis illum eius ab sunt pariatur corrupti deserunt deserunt commodi a hic sunt iure harum error unde iure ab esse facilis consequuntur necessitatibus distinctio unde fuga cum officiis quisquam eaque occaecati odio quisquam quae tempora ipsum rerum tempora iusto accusamus nobis suscipit facilis vitae nam quam quibusdam cum illum ea necessitatibus corporis eligendi corrupti quibusdam eligendi adipisci praesentium amet laudantium excepturi accusamus hic recusandae at aspernatur ipsum eius non unde maxime fugit atque placeat deleniti id sapiente at dolorum molestiae laboriosam eum totam dolores voluptates veritatis labore ut rerum voluptatum inventore suscipit culpa adipisci repellat eum in dolore excepturi quaerat dignissimos consequuntur repudiandae id facilis eum porro nobis in nesciunt culpa quo perspiciatis voluptatibus nisi unde veniam vel laboriosam architecto porro in repellendus inventore doloremque architecto',
    date: new Date('2022-11-29T10:45:32.422Z'),
    category: 'email',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '54817',
        type: 'pdf',
        name: 'class_zip_depersonalise.pdf',
        size: '2.8mb',
        thumbnail: 'https://picsum.photos/seed/h9DdKm58/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=8765781114355712',
      },
      {
        id: '71081',
        type: 'image',
        name: 'adjure_duh_viciously.jpg',
        size: '2.9mb',
        thumbnail: 'https://picsum.photos/seed/vYcJSeso/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=3569039827795968',
      },
    ],
  },
  {
    id: '4035888370',
    selected: false,
    title: 'Oriental Metal Bike',
    firstName: 'Kailey',
    lastName: 'Heaney',
    email: 'Brittany.Spencer@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
    company: 'Bernhard - Kunde',
    markedAsRead: true,
    summary: 'Nesciunt culpa fugit. Quidem est autem magni. Soluta nobis ab.',
    description:
      'quod veritatis esse necessitatibus aut explicabo blanditiis accusamus ratione quas corporis nihil voluptas culpa vel iusto assumenda id quasi magni autem ab possimus facere iusto eaque quisquam nihil vel ipsam voluptas quia id pariatur rem tenetur sapiente deleniti id adipisci molestiae perspiciatis adipisci id nisi libero inventore voluptates ipsum debitis natus explicabo cumque est voluptatem sunt beatae fugit atque repudiandae nostrum est suscipit perferendis magni pariatur natus sed animi dolorum dolorem iste consequatur reprehenderit quibusdam saepe sunt corporis ad nemo quae odio sint reiciendis magni neque odio amet ratione dignissimos deleniti harum nisi alias neque esse beatae neque ad provident',
    date: new Date('2022-07-11T23:26:01.967Z'),
    category: 'chat',
    hasAttachments: true,
    status: supportStatuses.Closed,
    supportType: supportTypes.Email,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '57138',
        type: 'pdf',
        name: 'yieldingly.pdf',
        size: '8.1mb',
        thumbnail: 'https://picsum.photos/seed/g3TyBN31HE/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=3311571071664128',
      },
      {
        id: '02214',
        type: 'image',
        name: 'juvenile.jpg',
        size: '10mb',
        thumbnail: 'https://picsum.photos/seed/ZELz7/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=2805770049552384',
      },
    ],
  },
  {
    id: '9966466939',
    selected: false,
    title: 'Sleek Bronze Salad',
    firstName: 'Catharine',
    lastName: 'Funk',
    email: 'Tracey.Moore@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-09.webp',
    company: 'Pouros - Heidenreich',
    markedAsRead: false,
    summary:
      'Explicabo quasi laborum odit. Inventore tempore voluptas ipsa. Placeat molestias eligendi maiores harum sint facere pariatur fugit quidem.',
    description:
      'quod temporibus aut facere maiores impedit error molestias libero recusandae incidunt natus id mollitia voluptatibus dolorem dignissimos vero qui veniam placeat magni inventore vero vitae ratione eligendi iusto doloribus molestiae veniam molestiae dolorum facilis iure omnis quod deserunt similique maxime inventore quibusdam autem voluptas consequatur laborum neque minus fuga praesentium blanditiis vero voluptas vero occaecati fugiat natus accusamus nemo natus mollitia numquam dolore dignissimos labore asperiores at incidunt repellat quia reprehenderit aliquid doloribus blanditiis blanditiis non magnam iste praesentium officiis explicabo aut labore voluptatum distinctio placeat perspiciatis aperiam a eaque vitae quidem illum quas ut id sequi a quisquam earum dignissimos veritatis perferendis optio nulla eius praesentium labore modi tempora quod cumque recusandae officia voluptate quaerat deserunt est est quibusdam earum nostrum molestias nobis consequatur iste voluptatum magnam est optio inventore nemo quisquam at nisi dignissimos ex facilis iusto enim iste perspiciatis veritatis expedita temporibus officia mollitia beatae voluptates inventore sed nihil necessitatibus alias distinctio deleniti atque distinctio quasi eius veniam dolorem consequuntur neque facilis itaque nulla illum consectetur accusamus accusamus asperiores repellat tempora odio natus sunt repellendus odit id dignissimos exercitationem enim reprehenderit adipisci nisi assumenda minima consequuntur fugit illo sed officiis at',
    date: new Date('2022-08-16T07:20:11.105Z'),
    category: 'all-open',
    hasAttachments: false,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '68620',
        type: 'pdf',
        name: 'provided_why_because.pdf',
        size: '6mb',
        thumbnail: 'https://picsum.photos/seed/xsn8q4CglU/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=8385319596457984',
      },
    ],
  },
  {
    id: '8105504409',
    selected: false,
    title: 'Modern Bronze Mouse',
    firstName: 'Toy',
    lastName: 'Ernser',
    email: 'Serenity.Wunsch@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-01.webp',
    company: 'Cruickshank - Krajcik',
    markedAsRead: true,
    summary:
      'Sint id pariatur tenetur ullam quo. Explicabo iure voluptatum at. Quo porro ipsum sapiente porro totam placeat quisquam.',
    description:
      'similique consectetur rerum veritatis aliquid unde nesciunt consequuntur nisi itaque molestias nostrum nesciunt suscipit nobis maxime modi natus eum repellendus recusandae minima debitis nisi dignissimos eveniet cum perferendis suscipit repellat saepe magnam incidunt laudantium dolorum perspiciatis quaerat doloremque mollitia magnam tempore illo quidem veritatis soluta error at accusantium corporis repellendus veritatis consectetur dolorem veritatis qui alias voluptatibus nemo et porro quo molestiae eveniet cum cupiditate facilis animi officiis voluptates modi perferendis fuga sunt quasi quibusdam dolorem vitae rem asperiores voluptates quod voluptatem laborum ab possimus suscipit accusamus occaecati occaecati ducimus fugit ratione dolores placeat fugit natus possimus voluptas aperiam fugit nihil tempora similique possimus a atque laboriosam fugiat ducimus exercitationem sapiente voluptate at dolorum nulla nemo nihil accusamus voluptas veniam libero maxime in quam nostrum vel distinctio magni consectetur tenetur exercitationem pariatur suscipit ullam nam iusto alias ipsam sunt reprehenderit nesciunt omnis voluptatibus perferendis eius corrupti ab hic eius odio explicabo voluptatum repellat voluptas error saepe praesentium quas officiis ducimus esse pariatur nulla officiis accusamus doloremque quod inventore ad officia ea eveniet animi doloremque earum cumque odio nesciunt porro delectus voluptates rerum dicta blanditiis ipsa omnis ullam in inventore hic cumque facere in expedita dolorem doloribus labore fugit deserunt a quos totam hic in atque facilis iusto iure fugit illum incidunt repudiandae deserunt sequi iste tempora earum illum officiis nemo adipisci quidem velit eius dolorum in asperiores tempore ullam error hic dolorem cupiditate culpa animi pariatur nisi numquam nihil nulla quas odio ipsum impedit voluptatibus odit placeat aspernatur veritatis at corporis repudiandae distinctio quod alias occaecati dolorem vel rerum esse eos eveniet delectus perspiciatis in rerum quidem odio debitis ullam at labore eum magnam occaecati harum ullam voluptates temporibus quas itaque expedita sunt adipisci facere hic culpa sed provident fuga magni tempora mollitia rem magnam eum ullam porro inventore facere rerum laborum ea pariatur iusto quisquam consectetur quidem laudantium nam saepe rerum facilis culpa porro praesentium soluta eos eligendi quo culpa reprehenderit minima dicta magni aspernatur alias pariatur necessitatibus consectetur cum ipsum facere nisi voluptatum error quasi harum cum ex sunt nam accusantium molestias possimus error voluptate consequatur beatae pariatur rerum sit iste consequatur quae voluptatibus iste voluptatem sed ex velit ullam aspernatur ipsa architecto vitae at ab temporibus autem magnam laudantium necessitatibus saepe expedita adipisci exercitationem voluptatem vitae dicta dolor ipsa molestias ratione magnam nihil provident debitis quam natus dolor saepe possimus aspernatur quos in reprehenderit deleniti occaecati error enim quos perspiciatis aperiam perferendis maxime harum vitae quaerat tenetur id dicta consequuntur corporis temporibus accusamus amet quia illum omnis error neque ratione error quia dolorem perspiciatis eius illum ducimus libero dolorem tenetur libero optio enim laborum culpa hic laborum ab rem magni excepturi nisi error repellendus eligendi eligendi sit esse ipsa autem doloribus recusandae excepturi natus vero nulla consequuntur corrupti tempora perferendis ex harum ipsum ducimus accusamus molestiae deleniti minima sunt ex repudiandae',
    date: new Date('2022-07-16T17:59:42.375Z'),
    category: 'email',
    hasAttachments: true,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '84222',
        type: 'pdf',
        name: 'as_waterlogged.pdf',
        size: '4.6mb',
        thumbnail: 'https://picsum.photos/seed/Iv21zXDz/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=1561946595786752',
      },
    ],
  },
  {
    id: '5544718065',
    selected: false,
    title: 'Tasty Fresh Soap',
    firstName: 'Eryn',
    lastName: 'Franey',
    email: 'Lauren.Yost56@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-02.webp',
    company: 'Kulas, Swift and Boehm',
    markedAsRead: true,
    summary:
      'Explicabo assumenda ducimus dolorem dolore consequatur repudiandae. Quos nostrum expedita delectus molestiae repellendus. Sit consectetur cum repudiandae cupiditate.',
    description:
      'tempora molestias ratione atque quasi nostrum delectus omnis sunt reiciendis minus nisi porro ipsam natus aliquid nemo eaque cupiditate ex molestias iste quaerat architecto quo voluptatibus eligendi corrupti sunt ipsa cum necessitatibus recusandae eos quo facilis ipsa maiores beatae ea impedit commodi maiores nam inventore quidem libero commodi magnam mollitia fuga nobis dicta corporis tempora harum accusamus alias quas libero sunt non dignissimos quibusdam eos consequatur deleniti unde dicta aliquid molestias quidem magnam dicta libero aperiam doloribus fugiat ducimus repellat delectus culpa vel tempora veniam quod quos explicabo dignissimos minima autem quis perspiciatis tempore quia dolor culpa maxime dignissimos est error praesentium necessitatibus soluta nostrum sed quisquam occaecati et dicta quaerat aliquid similique ad laudantium laboriosam veniam suscipit dicta repellendus eius nostrum sit aperiam rerum nostrum harum repellendus nisi nemo iusto dicta voluptatem non minus consectetur ipsa corporis distinctio veniam dicta natus autem pariatur facilis rerum cum suscipit aut vel laboriosam esse necessitatibus accusantium sit nostrum laboriosam delectus vel beatae qui illum accusantium molestias consectetur corrupti architecto in voluptas eos occaecati eum recusandae quam quisquam dignissimos quidem expedita occaecati perspiciatis non repudiandae voluptatibus quibusdam dolore modi animi modi veniam veniam error dolorem quidem culpa molestiae fugiat tempora incidunt veniam omnis voluptatibus consectetur explicabo laborum praesentium impedit harum nemo debitis necessitatibus blanditiis animi in repellendus laudantium aspernatur accusamus iure dolores sequi accusamus corporis ratione soluta ipsum repudiandae perferendis totam atque eveniet quam totam deleniti animi quam quo necessitatibus et distinctio eaque laudantium maiores sunt quos illum omnis autem mollitia distinctio hic inventore doloribus dolores error quia nulla culpa repellat laborum facilis vel eligendi eveniet neque voluptatum quasi facilis quis illum cupiditate veniam tempore culpa sed officia omnis soluta quia asperiores ducimus dolor minima illo numquam quas sunt tempore quos tenetur exercitationem molestias accusantium illum quaerat aut veniam quae recusandae quas amet inventore corporis rem ullam illum provident a doloremque a repudiandae accusantium quasi incidunt iure eligendi error libero fugit occaecati alias itaque unde sunt deleniti ducimus perspiciatis numquam architecto iusto illo assumenda eveniet aliquid tempore natus esse aperiam soluta iure eligendi animi cumque numquam nisi odio expedita labore necessitatibus blanditiis corrupti dolore voluptatum animi culpa explicabo error molestias odio ullam ipsa quasi animi aliquam accusantium dolorem et architecto ut reprehenderit voluptatibus odio id soluta amet nesciunt perferendis quas repellat',
    date: new Date('2023-03-31T19:20:28.510Z'),
    category: 'email',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '54664',
        type: 'image',
        name: 'modern.jpg',
        size: '1.4mb',
        thumbnail: 'https://picsum.photos/seed/IFIgy/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=5069998863155200',
      },
    ],
  },
  {
    id: '8647619559',
    selected: false,
    title: 'Recycled Concrete Bacon',
    firstName: 'Hank',
    lastName: 'Bode',
    email: 'Lavinia.Tillman@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-03.webp',
    company: 'Schulist, MacGyver and Hermann',
    markedAsRead: true,
    summary:
      'Repudiandae porro aut tempore quidem. Hic consequuntur deleniti laborum.',
    description:
      'ad maiores iure ut sint dolore sequi quos at placeat sapiente libero eos mollitia beatae repellat cupiditate voluptatibus voluptate recusandae quia aliquid eius similique adipisci quas velit doloremque maiores similique dicta necessitatibus at maxime officia ut perspiciatis molestias aperiam officia necessitatibus optio accusantium maiores quidem debitis facere in voluptatibus accusantium assumenda et dolorum dolores modi at ratione ducimus corrupti saepe voluptate dolor totam nihil atque quia repudiandae placeat quisquam atque quisquam ad veritatis possimus id aperiam molestiae culpa deleniti impedit quisquam nostrum deleniti temporibus suscipit autem blanditiis blanditiis ut eligendi repudiandae sequi laboriosam quaerat ab voluptas similique nesciunt recusandae molestias est id impedit nam aperiam et occaecati quis necessitatibus iure suscipit explicabo sequi sunt nam sed alias eveniet enim non commodi officiis enim nobis minima cupiditate sequi amet vero laudantium voluptate nam accusantium inventore repudiandae quibusdam facere distinctio repudiandae aperiam nobis reprehenderit odio numquam ut modi reprehenderit at accusantium ea impedit eos iusto atque vitae exercitationem molestiae at numquam reprehenderit est debitis molestias dignissimos rerum necessitatibus quidem illo quia molestiae molestias iure qui blanditiis ducimus ea dolores occaecati similique reiciendis exercitationem magni sapiente quidem aspernatur error voluptas deserunt sed nisi quidem eligendi officiis odit perferendis aliquam odio unde excepturi magni doloribus nostrum commodi ex debitis magni deserunt aspernatur nemo similique iure atque corrupti similique voluptatem aspernatur cupiditate animi eligendi dignissimos dolor soluta voluptates ab delectus in nihil quia',
    date: new Date('2021-10-14T18:49:33.650Z'),
    category: 'unassigned',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '55494',
        type: 'pdf',
        name: 'coverage.pdf',
        size: '9.6mb',
        thumbnail: 'https://picsum.photos/seed/P5bi9Wq8zb/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=3872088607686656',
      },
      {
        id: '45828',
        type: 'image',
        name: 'ail_smug.jpg',
        size: '5.9mb',
        thumbnail: 'https://picsum.photos/seed/WU3nPY3G7/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=5167894228893696',
      },
    ],
  },
  {
    id: '8412178547',
    selected: false,
    title: 'Generic Cotton Sausages',
    firstName: 'Timmy',
    lastName: 'Windler',
    email: 'Hunter97@gmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-04.webp',
    company: 'Mueller and Sons',
    markedAsRead: true,
    summary:
      'Possimus officia natus. Dolores consectetur vero tenetur numquam consequatur recusandae iste.',
    description:
      'laborum dolor unde esse nihil alias illo quasi magni atque corporis delectus a eligendi reiciendis qui aperiam repellat soluta culpa et itaque velit minima dolore autem iure officia magni ad praesentium in natus accusantium tempore odio minima aliquid distinctio sint amet maiores labore sit vitae illo id voluptate praesentium tempora porro iusto quo omnis maiores ab possimus dicta deserunt totam quos quo deserunt optio porro placeat odio minima adipisci repellat doloremque quaerat laudantium dicta praesentium harum quos unde minima non facilis eligendi officiis repudiandae numquam eaque doloribus consequuntur incidunt ducimus doloremque nam corporis consequuntur modi impedit iste nesciunt enim ipsam repudiandae voluptatem impedit accusantium blanditiis ad praesentium vero excepturi sit ducimus debitis rem quos accusamus itaque adipisci alias debitis dolore laborum reiciendis dolorum aspernatur rem deleniti dicta corrupti qui atque at quas libero nulla repellendus consequuntur quaerat aut possimus veniam quo error facilis laboriosam exercitationem minima nulla reiciendis assumenda rem hic nemo omnis suscipit error quae a quia consequatur voluptates harum officiis unde delectus mollitia accusamus facilis est ut ut rerum possimus adipisci cumque nemo laboriosam aut possimus at blanditiis nostrum maiores ducimus voluptates sunt dolorum assumenda ex pariatur voluptatum sint vero nihil debitis voluptatem quia laboriosam expedita unde magni nihil numquam porro adipisci magnam hic cum deserunt ipsum ab temporibus magni id magnam error adipisci totam omnis deserunt repellat quibusdam reprehenderit cumque dolores perspiciatis nemo dignissimos repellat temporibus dignissimos error ullam veniam nihil facilis et nostrum porro optio magni nemo corrupti quasi adipisci iure dolores reiciendis quaerat earum odio accusamus laboriosam exercitationem a delectus quibusdam vero doloribus eum vitae doloribus perferendis dolor cumque molestiae suscipit ullam eveniet mollitia repudiandae voluptate',
    date: new Date('2021-11-15T07:15:23.117Z'),
    category: 'all-open',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '90121',
        type: 'image',
        name: 'latex_beyond_fervently.jpg',
        size: '9.6mb',
        thumbnail: 'https://picsum.photos/seed/MzCx2Z/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=5616978135875584',
      },
      {
        id: '47360',
        type: 'pdf',
        name: 'loan.pdf',
        size: '8.3mb',
        thumbnail: 'https://picsum.photos/seed/ZgLX0Q/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=131756690767872',
      },
    ],
  },
  {
    id: '3829589986',
    selected: false,
    title: 'Oriental Bronze Bacon',
    firstName: 'Johan',
    lastName: 'McClure',
    email: 'Alayna.Hoppe@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-05.webp',
    company: 'Kemmer - Altenwerth',
    markedAsRead: false,
    summary:
      'Ea quam facere repudiandae consectetur maxime sint. Aperiam culpa accusamus est neque reprehenderit quae. Iure mollitia ipsa laboriosam.',
    description:
      'accusantium illum eligendi eius occaecati accusamus delectus beatae cum eligendi fugiat totam distinctio alias minima incidunt maiores sint provident exercitationem ducimus quod minima ad ullam modi eaque consectetur alias laudantium iste vel illo libero vitae fugit minima repudiandae eveniet quidem fugit doloribus eaque exercitationem perferendis reiciendis explicabo iure libero aut provident odit architecto expedita sit commodi commodi sed blanditiis repellendus consequatur quisquam eligendi modi aperiam ab quasi sunt repellendus itaque nisi architecto exercitationem dolorem tenetur ex exercitationem tempore saepe minima reiciendis possimus excepturi recusandae saepe officiis doloremque porro quam distinctio qui officiis necessitatibus cum molestias numquam dolorem labore aliquam animi praesentium temporibus sapiente exercitationem officia magni modi laudantium vero ipsa magni quia est occaecati ipsam tempore facilis sunt pariatur fugit necessitatibus velit assumenda dolor pariatur quo temporibus nobis iure laudantium assumenda alias aspernatur totam modi consequatur voluptatum quisquam ipsam rerum quas quibusdam excepturi dolores quisquam quis architecto optio tenetur doloribus animi ea voluptatum saepe eos quis nulla aliquid dicta facilis unde nobis non quidem quas enim excepturi reprehenderit officiis maxime repellat ea nobis eos consequatur voluptas suscipit quae quas alias veritatis adipisci aliquid consequuntur praesentium necessitatibus molestiae amet qui exercitationem non dignissimos omnis incidunt facere sunt ea molestias deleniti voluptatem quia magnam quo saepe recusandae',
    date: new Date('2022-06-30T20:38:30.589Z'),
    category: 'email',
    hasAttachments: false,
    status: supportStatuses.Closed,
    supportType: supportTypes.Chat,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '17486',
        type: 'image',
        name: 'huzzah.jpg',
        size: '9.5mb',
        thumbnail: 'https://picsum.photos/seed/o7zAw1j/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=407151036071936',
      },
    ],
  },
  {
    id: '1161125332',
    selected: false,
    title: 'Oriental Granite Ball',
    firstName: 'Autumn',
    lastName: "O'Conner",
    email: 'Josefa.Herman@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-06.webp',
    company: 'Leffler and Sons',
    markedAsRead: false,
    summary:
      'Quod eos aliquid molestias assumenda enim culpa. Nemo adipisci dolore. Laudantium reprehenderit at blanditiis expedita alias veritatis ullam repudiandae.',
    description:
      'ab illo distinctio beatae sit dolores voluptas tempore esse reiciendis rem unde repellendus impedit est possimus asperiores non praesentium eos sit excepturi sit omnis magni corporis maiores aliquam recusandae provident doloribus sunt neque unde sunt dolor minus maxime id doloremque ducimus qui inventore totam molestias incidunt dolor odio possimus cum ab tempore corporis dolorum aut eum consequuntur perspiciatis illum numquam quasi exercitationem voluptas voluptatum perspiciatis voluptas consequuntur libero dolorum accusamus quaerat optio neque sunt provident exercitationem nihil perspiciatis reiciendis doloribus facilis officia itaque laboriosam voluptatem nostrum aliquid excepturi rerum at repellendus quasi a quis laboriosam sunt autem iusto vitae vitae optio sit qui suscipit at quaerat assumenda dignissimos dignissimos voluptates quisquam optio quas deleniti eaque eum dolorum eligendi repudiandae nulla porro totam ut minima laboriosam commodi accusantium architecto nulla architecto molestias blanditiis iure in officiis mollitia sint natus sint velit repellat aut nihil recusandae pariatur temporibus aperiam commodi accusantium rem officia ratione mollitia facilis commodi repellendus adipisci cupiditate reiciendis at tempore atque esse quibusdam minima molestiae quibusdam similique neque natus accusamus quas labore nihil ut est voluptatem nemo dolor eum facere ipsam nulla quidem totam sunt autem autem reiciendis consequuntur vero optio occaecati error laborum beatae veniam est illum sed temporibus est illo non repellat alias amet necessitatibus officia enim blanditiis aperiam sed dolorum nesciunt libero aspernatur numquam magnam facere amet vitae ducimus magnam rerum molestiae repellendus alias provident consequatur laborum delectus itaque nisi nulla nobis maxime accusantium deleniti dolorem unde fuga cupiditate sequi totam nobis dignissimos odio voluptate aliquid corrupti molestiae pariatur dicta sit delectus totam enim excepturi amet quibusdam vel harum maxime',
    date: new Date('2022-08-19T22:15:36.822Z'),
    category: 'assigned-to-me',
    hasAttachments: false,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '86473',
        type: 'image',
        name: 'regarding_meanwhile.jpg',
        size: '6.3mb',
        thumbnail: 'https://picsum.photos/seed/bny66WPbq/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=4686307420798976',
      },
    ],
  },
  {
    id: '6996933690',
    selected: false,
    title: 'Incredible Plastic Keyboard',
    firstName: 'Ashton',
    lastName: 'Frami',
    email: 'Caesar.Cole@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-07.webp',
    company: 'Pollich, Reynolds and Dooley',
    markedAsRead: true,
    summary:
      'Ullam similique nemo. Deleniti fugit delectus velit ratione rerum. Quas reprehenderit culpa.',
    description:
      'quis commodi sunt quo earum exercitationem maiores laborum corporis totam veritatis quod ipsum adipisci ab optio saepe ut iure eaque voluptas tempore nemo est neque dolorum harum eveniet officia expedita ad minima inventore quis non dolore nostrum iusto quibusdam commodi fuga illo asperiores harum ab quae rerum asperiores ducimus ipsam provident blanditiis harum mollitia ipsa cupiditate rem praesentium laboriosam modi nostrum modi labore officiis ad cum incidunt quam pariatur a repudiandae sed ab harum quo atque exercitationem reiciendis facere provident ducimus ipsa officia cupiditate quaerat tempora natus voluptates cupiditate neque possimus provident suscipit labore modi excepturi in culpa deserunt sunt pariatur consequatur unde iusto ullam facilis ullam placeat qui beatae ipsum quaerat sed omnis quos repellat ex delectus quaerat enim labore repudiandae beatae quidem in odio consequuntur optio labore exercitationem excepturi molestiae expedita blanditiis soluta minus incidunt dicta repellendus consequatur labore eius ullam quibusdam expedita eaque in adipisci quos laboriosam mollitia consequatur harum expedita porro unde libero quam nesciunt excepturi fugit optio accusamus quas deserunt ducimus ab voluptas architecto eum aliquam est asperiores aliquam laboriosam esse doloremque nobis minus repudiandae quod iusto quae minus quas molestias sed voluptates quam ut nisi sint laboriosam nemo',
    date: new Date('2021-09-07T13:07:15.525Z'),
    category: 'email',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.High,
    attachments: [
      {
        id: '09412',
        type: 'image',
        name: 'anxious_off.jpg',
        size: '2mb',
        thumbnail: 'https://picsum.photos/seed/C3GpTNy2S/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=738589920985088',
      },
      {
        id: '68587',
        type: 'pdf',
        name: 'nor_anti.pdf',
        size: '5.1mb',
        thumbnail: 'https://picsum.photos/seed/7nK8cyY/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=6642952094875648',
      },
    ],
  },
  {
    id: '3377474026',
    selected: false,
    title: 'Small Concrete Ball',
    firstName: 'Watson',
    lastName: 'Kunde',
    email: 'Ari.Kilback2@yahoo.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-08.webp',
    company: "O'Conner - Huel",
    markedAsRead: false,
    summary:
      'Ipsam ducimus minima minus temporibus autem quisquam voluptates cum. Accusantium at rem beatae non earum iusto beatae eaque nam.',
    description:
      'sapiente aliquid sint nesciunt tempora deserunt provident ipsam ea adipisci harum fuga enim mollitia explicabo non libero vero minima quasi aliquam quia iste officia voluptatibus eum molestias enim dicta in culpa dolorem porro quibusdam ab aliquid ratione sunt cumque labore rem tempore libero modi error veniam cumque minima ea similique maiores aliquid explicabo officiis numquam aut possimus sunt repellat a optio accusamus corporis ullam quis ducimus sapiente aliquid ullam beatae illum consectetur quam officiis atque ut enim illum numquam expedita molestiae esse natus tenetur maxime veniam nesciunt numquam unde quam tempore maiores quos nam consectetur quaerat pariatur placeat quo vitae laudantium eveniet dolor atque sit repellat sint dolore quasi officiis nobis explicabo ducimus quia totam amet maxime optio odit ex aspernatur voluptas accusantium eius numquam culpa illo quibusdam expedita quidem aspernatur distinctio natus eaque voluptatibus dolores sint sequi consequatur atque odit a id sapiente cupiditate natus odio pariatur atque qui sint occaecati blanditiis est illo nobis cumque veritatis unde odit nisi nihil corporis quisquam asperiores molestiae totam temporibus nam autem itaque soluta itaque eligendi in dolorum aspernatur sunt expedita accusamus esse libero adipisci architecto maxime ipsam odit ratione soluta reiciendis dolorum quidem iusto distinctio quasi minus quam quos pariatur ratione molestias eos ab explicabo voluptatibus sapiente repellat eaque corporis deleniti eligendi reiciendis nam eum quos officia perspiciatis id quia deleniti nobis quo porro odit minima provident et quasi eaque veritatis doloremque culpa molestiae asperiores nisi delectus perspiciatis consequatur veritatis et asperiores quae magni enim ut debitis odio quibusdam dolor quod quam quaerat odio ipsa veritatis corrupti dicta possimus sequi minus recusandae vitae dolorem iste laboriosam consequuntur quis vero odio quaerat dignissimos ex error inventore corrupti quae omnis tempora voluptates fugiat aliquam ex similique id fugiat modi tempora tempore eaque facilis ratione expedita dolor exercitationem vel repellat fuga quis adipisci aliquam aperiam deserunt culpa alias architecto voluptates excepturi iste accusamus fugit dicta eveniet placeat soluta quos unde sint dignissimos facilis nulla minus voluptatem vel cumque nesciunt tempore culpa quas fugiat eligendi impedit vitae accusamus alias ullam sit animi eaque laudantium iure mollitia exercitationem accusantium at officia reprehenderit nemo facilis repellat quod at corrupti voluptatem voluptates sed eum provident exercitationem deserunt minus inventore recusandae enim quos deleniti iure alias esse aut alias nihil molestias hic tenetur alias impedit molestiae iste aut ea ad culpa temporibus eaque consectetur tempora voluptatibus reprehenderit inventore',
    date: new Date('2023-04-22T20:56:26.073Z'),
    category: 'chat',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Email,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '64088',
        type: 'image',
        name: 'lest_lest_since.jpg',
        size: '3.2mb',
        thumbnail: 'https://picsum.photos/seed/ANSgE/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=4143048376188928',
      },
    ],
  },
  {
    id: '0368161640',
    selected: false,
    title: 'Oriental Steel Car',
    firstName: 'Paula',
    lastName: 'Dach',
    email: 'Jaida_Haag@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-09.webp',
    company: 'Batz LLC',
    markedAsRead: false,
    summary:
      'Laborum voluptates recusandae. Cum iste sit aut accusamus alias qui sapiente. Ab eligendi possimus asperiores totam rem debitis alias quidem.',
    description:
      'deleniti nostrum dolores voluptates et consequuntur eos nisi iusto rerum sapiente quod eius autem numquam vitae velit modi natus maxime sed exercitationem reiciendis similique eveniet laboriosam consequuntur laborum aut at saepe fuga voluptatibus laboriosam aperiam temporibus porro libero cumque officiis quasi tempore quis id natus veritatis debitis soluta ipsam iure omnis alias quo porro id architecto sint voluptatem odit similique quaerat impedit adipisci fuga voluptatibus nesciunt consectetur quos tempora eum nihil corporis laudantium velit commodi officiis possimus ducimus ipsum nostrum in in tenetur assumenda debitis sequi numquam ea voluptatem quod non voluptatem necessitatibus dicta architecto quod aliquam consectetur laboriosam blanditiis blanditiis mollitia magnam voluptatibus quo quidem accusamus alias laborum magni praesentium veritatis pariatur tenetur unde tempore ut non reiciendis natus ea quam voluptates magni quod ea non ipsum dolore quae commodi recusandae nesciunt nulla saepe deserunt odit eius velit assumenda non provident nobis accusamus ullam qui officiis facilis omnis earum quisquam ullam nihil fugit vel deleniti eius recusandae explicabo alias rerum accusantium quam dolor vel illum fugit error ad voluptate eligendi eius provident ipsum cumque praesentium sed nobis aliquam sint ducimus asperiores eius itaque atque tenetur optio pariatur dolores asperiores nesciunt possimus cumque delectus sequi placeat perferendis mollitia quam sapiente soluta magnam doloremque iure nobis corporis illo fuga excepturi dolor asperiores numquam sunt ullam officiis enim ad repellat sapiente non molestiae inventore vitae corporis quasi nulla asperiores tempora ex asperiores velit accusantium quas incidunt nobis molestias nobis harum praesentium inventore consectetur itaque soluta quae ut deleniti nulla vitae tempore illum qui adipisci laborum aspernatur recusandae excepturi veritatis odio a eligendi amet veritatis ab sunt pariatur eum alias corporis aliquam facere esse architecto pariatur perspiciatis corrupti quisquam consequuntur doloribus consequuntur non ducimus praesentium maxime minus explicabo quibusdam minima modi dolores mollitia alias molestiae voluptatibus ad porro doloribus ut voluptates similique quas eaque praesentium non deserunt optio doloremque sunt saepe ab suscipit reprehenderit at soluta doloribus consequuntur enim quam ex praesentium necessitatibus harum harum in cupiditate placeat veniam tenetur dolor veritatis debitis odit tempora voluptatibus repudiandae earum corporis autem ullam delectus maiores repellat reiciendis repellendus beatae saepe ipsum mollitia nesciunt ad eligendi nihil vero nesciunt officia soluta architecto ipsam beatae molestias harum id quisquam dolor provident laborum nemo vero error aliquid debitis vel facilis nemo deleniti sit voluptate sint beatae enim ad quas beatae reiciendis quia beatae illo exercitationem quas porro adipisci ipsum nobis magni et est omnis assumenda dolorem laborum repudiandae numquam amet eaque consequatur illum eligendi doloremque similique reprehenderit natus dolor dolore id et officia aliquid provident sapiente totam tempore aliquid ipsum autem sequi officiis excepturi ratione ducimus quia illum libero autem error veritatis itaque minima fugiat sapiente molestias hic totam vero facere doloribus aliquam molestias saepe labore corrupti molestias repellendus aliquam architecto reprehenderit aut distinctio asperiores a nesciunt quibusdam soluta voluptate veniam deserunt dicta perspiciatis',
    date: new Date('2022-05-17T11:49:16.757Z'),
    category: 'unassigned',
    hasAttachments: false,
    status: supportStatuses.Open,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Medium,
    attachments: [
      {
        id: '43217',
        type: 'image',
        name: 'parse_which.jpg',
        size: '8.2mb',
        thumbnail: 'https://picsum.photos/seed/mIbQ7NC1W/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=6259198534877184',
      },
    ],
  },
  {
    id: '0496563474',
    selected: false,
    title: 'Luxurious Wooden Shirt',
    firstName: 'Kip',
    lastName: 'Ferry',
    email: 'Shannon_Jenkins29@hotmail.com',
    avatar:
      'https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-11.webp',
    company: 'Hammes, Farrell and Frami',
    markedAsRead: true,
    summary:
      'Beatae nulla illum suscipit mollitia. Nostrum ad aspernatur officia tenetur ipsam esse. Maxime odit eveniet ad harum doloribus.',
    description:
      'neque dolorem quod perspiciatis aut nam optio porro placeat cumque nisi quas occaecati aliquam dolorum fuga placeat distinctio explicabo architecto fugiat officia consequuntur maxime aperiam cumque facere reiciendis impedit facere quo enim consequatur quasi consequuntur magnam qui eaque enim dolore necessitatibus placeat dolorum quia dolorem atque vitae reiciendis eaque sit quaerat ducimus cumque impedit odio optio consequatur dolorem repellendus enim corrupti deleniti a facere ut perferendis nesciunt illum doloremque asperiores quaerat possimus architecto autem natus ducimus a sunt earum quaerat facere at quidem hic natus a repudiandae facere optio deserunt minus vero sequi beatae provident est neque odio ipsa accusamus quibusdam fugiat consequuntur ea sequi magnam magnam accusamus neque recusandae maxime perspiciatis cumque tenetur consequuntur quod quis eveniet odio ullam natus id corporis maiores ex ut minus fugit consequuntur quam amet sequi adipisci saepe facere voluptatibus voluptates debitis possimus eius quod ex quis nulla ad exercitationem ipsa iste aliquam ipsa fugit illum maxime odit doloremque accusantium vero porro molestias occaecati praesentium odio maiores perferendis temporibus cum saepe quo nihil quod ut recusandae aliquid error maiores explicabo facere hic est molestias voluptatum architecto reiciendis enim necessitatibus doloribus iure qui sint dolores quas modi nobis doloribus expedita saepe libero nisi ab consectetur magnam excepturi quaerat aspernatur perferendis quaerat delectus natus et nemo culpa sunt doloremque in itaque error totam voluptatem quam magni quasi voluptatibus ipsa voluptas ratione officia doloribus dolorum quaerat dolorum nostrum cupiditate porro repellat quibusdam omnis inventore quisquam aut velit velit quis qui officiis velit ipsum et in reiciendis magni illo reiciendis exercitationem libero ipsa error eius alias quibusdam quis qui perspiciatis occaecati velit sapiente nostrum occaecati voluptatibus sapiente similique sapiente quas illo omnis debitis reiciendis placeat distinctio consectetur atque culpa occaecati eum excepturi doloremque soluta ipsa saepe necessitatibus reiciendis quia reprehenderit deserunt dolores molestias fuga sapiente nemo ipsa veniam ullam eum excepturi voluptatibus quo minima odio commodi pariatur sequi eveniet maxime suscipit in ad sequi consectetur ea fuga totam dolorem excepturi eaque explicabo cum nemo accusamus eligendi consectetur odit atque occaecati minus reiciendis voluptatibus suscipit aspernatur deserunt tempora nulla soluta dolorem eligendi molestiae odit ratione repellendus blanditiis quos corporis dignissimos aspernatur cupiditate aliquid reprehenderit ipsam neque ipsa eius explicabo iusto illum quae ipsam nesciunt mollitia recusandae soluta fugiat deserunt cum excepturi eius molestiae maiores cum sapiente quae nulla mollitia occaecati deserunt exercitationem expedita tempore temporibus reiciendis iure fugit doloremque asperiores sint tenetur cum vero maiores soluta expedita magnam rerum laboriosam impedit consequatur sapiente corporis tempora nostrum temporibus eveniet earum sapiente repudiandae vitae modi earum libero laudantium placeat in velit ut quibusdam deserunt praesentium ut eius dolorem corporis',
    date: new Date('2021-10-08T23:24:48.320Z'),
    category: 'email',
    hasAttachments: true,
    status: supportStatuses.Open,
    supportType: supportTypes.Chat,
    priority: supportPriorities.Low,
    attachments: [
      {
        id: '48492',
        type: 'pdf',
        name: 'knowingly_along.pdf',
        size: '2.2mb',
        thumbnail: 'https://picsum.photos/seed/0NjLs2mF/128/128',
        preview: 'https://loremflickr.com/640/480/nature?lock=3574009702645760',
      },
    ],
  },
];
