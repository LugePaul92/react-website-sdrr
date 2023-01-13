import styled from "styled-components";
import React from "react";
import Kanuni from "./Kanuni.jpg";
import Sinai from "./Sinai-smaller.webp";
import { Image } from "../../components";
import { Icon } from "../../components/Icons";
export const KanuniZaMsingi = () => {
  const kanuniText: string[] = [
    "1. Kuna Mungu mmoja, nafsi hai, halisi, aliye Muumbaji, chimbuko,mtegemezaji, juu ya yote, na Baba wa wote. Mungu kwa asili hafikwi na mauti, mwenye enzi zote, mwenye kujua yote, na aliyepo kila mahali kwa njia ya mwakilishi wake, Roho Mtakatifu. Hana kikomo, ni wa milele na asiyebadilika, ni mwenye haki na mtakatifu, mwingi wa huruma, mwenye fadhili, si mwepesi wa hasira, mwingi wa rehema na upendo na kweli. Ingawaje Mungu anapita ufahamu wetu, kwa kiasi aweza kujulikana kwa tabia na uwezo vilivyooneshwa ndani ya Mwana wake wa pekee na pia ufunuo wa Baba. Yu astahili kuabudiwa, kusujudiwa, na kutumikiwa na wote milele zote.",
    "2. Mwana wa Mungu alifanyika pia mwanadamu, ndiye Kristo Bwana [Imanueli-Mungu pamoja nasi]. Katika Yeye vitu vyote viliumbwa, tabia ya Mungu imefunuliwa, wokovu wa jamii yote ya wanadamu unakamilishwa na ulimwengu unahukumiwa. Yeye kama Mwana wa pekee wa Baba, alizaliwa katika sura nyingine katika Yesu Kristo [Alizaliwa mara ya pili]. Aliishi na kupitia uzoefu wa majaribu kama mwanadamu, lakini kwa ukamilifu alionesha mfano wa haki na upendo wa Mungu.",
    "3.	Roho Mtakatifu ni nafsi ya tatu ya Uungu na ni uzima, Damu, Pumzi ya uhai ya Kristo, ambayo ilitolewa kutoka kwa Kristo wakati wa kuzaliwa katika sura nyingine (incarnation) ili wana na binti zake waweze kuishiriki na ni kutukuzwa kwa Kristo (Yoh 14:17).",
    "4.	Fundisho la Utatu Mtakatifu siyo la kibiblia, lina chimbuko la kipagani, lina chanzo cha Kikatoliki, ndiyo mvinyo ya Babeli na shina kuu la maasi duniani na mbinguni, kilele cha udanganyifu mkuu wa Shetani katika Ukristo bandia na siri ya uasi (mystery of iniquity). Ni mnara wa madanganyifu, makufuru na chukizo la machukizo yote kutoka kuzimu, mnyama wa kutisha wa Kikatoliki mwenye vichwa vitatu aliyemeza madhehebu yote duniani, “Omega” ya uasi na “sanamu ile ya wivu” (Eze 8:5) katika Kanisa la SDA kuanzia wakati uongozi wa Kanisa ulipoliasilisha kwa siri mwanzoni mwa miaka ya 1930 na hatimaye kupiga kura kulikubali rasmi mwaka 1980. Kulingana na unabii, ndiyo “Sanamu ya Mnyama” (Ufu 14:9-11). Mshiriki au kiongozi ana jukumu la kuhubiri hili katika mimbari na hata mitaani.",
    "5.	Kwa njia ya Yesu Kristo, washiriki wanapata msamaha wa dhambi ambazo zimetubiwa na kuachwa.",
    "6.	Biblia ni Neno la Mungu lililovuviwa, na ingawa limeandikwa na mwanadamu, ni ufunuo usioteleza, wenye mamlaka wa mapenzi ya Mungu, na ndiyo kipeo cha tabia, kipimo cha uzoefu, ni kamili, linalojitosheleza, na mwongozo pekee wa imani na matendo.",
    "7.	Wote watakaoingia mbinguni lazima wawe wamezaliwa tena, ndugu na dada walioongoka na Kristo hukaa katika moyo ulioongoka, akiandika juu yake kanuni za sheria yake, akimwongoza mwumini kufurahia kutii mausia yake, na akitoa nguvu kama hizo kwa ajili ya utii.",
    "8.	Kwa njia ya kujifunza Neno, Mungu ananena kwetu, akitoa nuru na nguvu; kupitia maombi roho inaunganishwa pamoja na Mungu na kwamba hizi ndizo njia zilizopangwa na Mbingu ili kupata ushindi katika vita na dhambi na kwa ajili ya kuendeleza tabia ya Kikristo.",
    "9.	Kila mshiriki yuko chini ya amri takatifu kutoka kwa Yesu kutumia talanta zake katika kazi ya kuongoa roho na katika kusaidia kupeleka injili ulimwenguni kote na kwamba pindi kazi hii ikishafanyika na tabia ya Kristo kudhihirika kikamilifu ndani ya watu wake, Yesu atakuja.",
    "10. Wakristo wameitwa kwa ajili ya kutakaswa na maisha yao yanatakiwa kudhihirisha tabia ya uangalifu katika mwenendo na katika staha na katika mavazi yasiyopambwa na kwamba inatakiwa kuwepo tofauti dhahiri baina ya mavazi ya wanaume na wanawake, na kwamba mwanaume au mwanamke anatakiwa kujiepusha na vazi lolote ambalo haliendani na  mwongozo wa kibiblia wa staha, na kujiepusha na kuvaa heleni, mikufu, bangili, pete, vipodozi vinavyomelemeta, na aina yoyote ya mavazi ambayo yanavuta macho kwao wenyewe, na kwamba mvuto wao unatakiwa kutoka katika kujipamba kwa ndani kwa tabia ambayo itawavuta wengine kwa Yesu.",
    "11. Mkristo akitambua kuwa mwili wake ni hekalu la Roho Mtakatifu, basi atamheshimu Mungu kwa kutunza mwili wake, akijiepusha kutokana na vitu vilivyo na kafeini na vinywaji vinavyolewesha, madawa haramu na ya kijamii, tumbaku katika aina zake zote, damu na mafuta ya vyakula vya jamii ya nyama, nyama za wanyama najisi na samaki na atakuwa anakazana kwenda sambamba na maelekezo ya Mungu kuhusiana na lishe ya awali ya Mwanzo 1:29 na 3:18.",
    "12. Katika maisha ya Ukristo, kuna kutengana kabisa kutoka katika matendo ya kidunia kama kucheza karata na bao, kwenda kwenye majumba ya starehe na muziki, kucheza densi, kusoma vitabu vya riwaya, michezo ya mashindano, kuangalia televisheni zisizofaa, na kusikiliza miziki inayosisimua, ya kiulimwengu, n.k., ambayo inaelekeza katika kufisha na kuharibu maisha ya kiroho.",
    "13. Biblia hufundisha juu ya jumuiya rahisi na kwamba washiriki wa jumuiya hii wako chini ya matakwa matakatifu kuwa chini ya Kristo, Kichwa cha Kanisa, kwa utiifu kuunga mkono kazi yake, na kushiriki katika kuidumisha na kwamba hawatakiwi kuacha kukutana wenyewe pamoja.",
    "14. Desturi ya Meza ya Bwana hukumbusha mauti ya Kristo; kushiriki kwa washiriki wa kundi ni muhimu kwa ajili ya ukuaji Kikristo na ushirika na kwamba inatakiwa kutanguliwa na desturi ya kuoshana miguu kama maandalizi ya huduma hii muhimu na ni lazima ifanywe na wale wanaokiri imani ya kweli tu.",
    "15. Kuja kwa Kristo mara ya pili ndilo Tumaini la Baraka la Kanisa, kilele kikuu cha injili, wakati Kuja kwa Yesu kutakuwa halisi, binafsi, wazi na kuonekana ulimwenguni mwote, pamoja na malaika wake watakatifu? Kwamba Yesu alitaja baadhi ya dalili za nyakati ambazo zingedhihirisha kuwa kuja kwake kuko karibu, na kwamba karibu mistari mbalimbali ya unabii imekamilika na inaonesha kuwa “yuko karibu sana, naam hata mlangoni.”",
    "16. Ubatizo kwa kuzamishwa majini ni ishara ya mauti, kuzikwa, na kufufuka kwa Kristo na kwa dhahiri hueleza imani katika neema yake inayookoa na kuacha dhambi na ulimwengu na kwamba unatambuliwa kama hali ya kuwa mshiriki wa mwili wa Kristo. Ubatizo wa kweli ni katika jina la Yesu peke yake na siyo katika kanuni ya Utatu Mtakatifu (angalia Mdo 2:38; 8:16; 10:48; 19:5).",
    "17.	Zaka ni takatifu kwa Bwana na ni njia ya Mungu kwa ajili ya kutegemeza huduma yake. Inatukumbusha sisi kuwa Mungu ndiye mmiliki wa vitu vyote na kwamba matoleo ya hiari pia ni sehemu ya mpango wa Mungu kwa ajili ya kutegemeza kazi yake ulimwenguni kote.",
    "18.	Mwanadamu anapatwa na mauti [yuko chini ya kifo] na kwamba wakati watu wakifa basi hawana fahamu [wamelala] na kwamba watu wote, wema na waovu hali kadhalika, wanabaki kaburini mpaka siku ya ufufuo.",
    "19.	Kutokufa huja tu kupitia utii kwa neno la Mungu na kunatolewa kama zawadi kutoka kwa Mungu wakati wa kurudi kwa Kristo mara ya pili.",
    "20.	Baada ya kupaa, Kristo alianza huduma yake kama kuhani mkuu katika mahali patakatifu kwenye Hema Takatifu ya Mbinguni [Patakatifu], hema ambayo ni halisi ya mahali pa kukutania pa duniani pa kipindi kilichopita na ambayo ilikuwa ni kivuli, na kwamba kazi ya hukumu ya upelelezi ilianza Kristo alipoingia awamu ya pili ya huduma yake, katika patakatifu pa patakatifu, palipooneshwa katika huduma ya kidunia kwa Siku Kuu ya Upatanisho, na kwamba kazi hii ya hukumu ya upelelezi katika Hema Takatifu ya Mbinguni ilianza mnamo Oktoba 22, 1844, ikifunga wakati wa unabii wa Biblia wa mwisho kabla ya kurejea [Kristo], siku 2300, na kwamba hukumu ya upelelezi hujumuisha hukumu ya mwisho ya rekodi zetu za maisha [kufungwa kwa rehema] kabla Yesu hajarejea.",
    "21.	Wenye haki waliokufa watafufuliwa katika uzima wakati wa kuja Kristo mara ya pili (ujio) na kwamba pamoja na wenye haki walio hai, watanyakuliwa kumlaki Bwana mawinguni, na watakwenda pamoja naye mbinguni, na pale watakaa miaka elfu [milenia].",
    "22.	Waovu ambao wanaendelea kuishi wakati wa kuja kwa Kristo mara ya pili watauawa kwa mng’ao wa kuja kwake na kwamba hawa, pamoja na waovu waliokufa wa zama zote, watangoja ufufuo wa pili, mwishoni mwa miaka elfu moja.",
    "23.	Mwishoni mwa miaka elfu moja, matukio yafuatayo yatatokea: (a) Kristo na wenye haki watashuka kutoka mbinguni, pamoja na Mji Mtakatifu, Yerusalemu Mpya; (b) waovu waliokufa watafufuliwa; (c) Shetani, malaika zake na waovu watapokea ujira wa mwisho wa dhambi wakati moto unaposhuka kutoka mbinguni kwa Mungu ili kuwaangamiza na kwamba haya ndiyo mauti ya pili; na (d) moto huu, ambao unaangamiza kazi za dhambi, utasafisha dunia.",
    "24.	Dunia, ikiwa imesafishwa kwa moto na kuumbwa upya kwa nguvu ya Mungu, itakuwa ni makao ya milele ya waliokombolewa na Mungu mwenyewe ataishi pamoja nao.",
    "25.	Kufuatana na utaratibu wa Mungu kuwashughulikia wanadamu, akiwaonya juu ya matukio yanayokuja ambayo kwa dhahiri yanaathiri hatima yao, amepeleka utangazaji wa kurejea kwa Kristo karibuni na kwamba ujumbe huu wa maandalizi inaashiriwa na ujumbe wa malaika watatu wa Ufunuo 14 na kwamba ujumbe huu unatoa watu ambao wanatunza amri za Mungu na imani ya Yesu.",
    "26.	Siku ya saba ya juma, Jumamosi, ni ishara ya milele ya uwezo wa Kristo kama Muumbaji, Mtakasaji, na Mkombozi na ni; kwa hiyo, siku ya Bwana, Sabato ya kweli ya Kikristo, ikiwa na muhuri wa Mungu aliye hai na kwamba inatunzwa kuanzia machweo ya jua ya siku ya Ijumaa hadi machweo ya jua ya siku ya Jumamosi.",
    "27.	Kutunza Jumapili ni siku bandia ya Kipagani badala ya utunzaji wa Sabato ya siku ya saba na kwamba Jumapili imekuwa inahamasishwa na upapa kama ishara ya mamlaka yake, na kwamba wakati utunzaji wa Jumapili utakapolazimishwa kwa sheria ya nchi ya Marekani unakuwa ni ishara ya mwisho ya mnyama—chukizo la uharibifu kusimama.",
    "28.	Upapa ni Mpinga Kristo wa unabii wa Biblia; ulikuwa ni mamlaka tesaji katika Zama za Giza na tena, kwa kushirikiana pamoja na Uprotestanti ulioasi, utawatesa watakatifu wa Mungu wakati wa mwisho na kwamba ni kubadilisha Sabato na mafundisho mengi ya kipagani yasiyoendana na Biblia ambayo umeleta katika ulimwengu wa Kikristo yanayoutambulisha kama Babeli ya kisasa na kiroho.",
    "29.	Kanisa halitakiwi kuja na karama zaidi ya uwepo wa karama ya Roho ya Unabii ambayo inatakiwa kuwa moja ya alama inayolitambulisha Kanisa la kweli la Mungu mwisho wa wakati.",
    "30.	Karama hii ya unabii ilidhihirishwa katika maisha na huduma ya Ellen G. White na yaweza kudhihirishwa pia katika mtu yeyote kabla ya kufunga historia ya ulimwengu ikiwa mtu huyo atanena na kutenda pasipo kupingana na Biblia na Ellen G. White (Yoe 2:28; Mdo 2:17).",
    "31.	Kujitenga kwa hiari kunatakiwa kuwepo ili kutoka katika Makanisa na makundi yote [ikiwa ni pamoja na lile linalodai kuwa Kanisa la SDA] leo ambayo yanakiri fundisho la mashetani la Utatu Mtakatifu pamoja na machukizo mengi ya Babeli.",
    "32. Ushirika wetu [wangu] unatakiwa kuondolewa kwa hiari kutoka katika vitabu vya majina vya Makanisa haya na makundi leo [ikiwa ni pamoja na lile linalodai kuwa Kanisa la SDA] kwa sababu yanakiri fundisho la mashetani au chachu yake.",
    "33.	Makanisa haya na makundi [ikiwa ni pamoja na lile linalodai kuwa Kanisa la SDA] ni Babeli iliyoanguka leo kwani yamelewa mvinyo ya Babeli [Utatu Mtakatifu].",
    "34.	Mlango wa rehema tayari umeshafungwa kwa Makanisa haya na makundi kishirika [ikiwa ni pamoja na lile linalodai kuwa Kanisa la SDA] kwa sababu ya kulewa mvinyo ya Babeli [lakini siyo kwa washiriki wote wa Kanisa].",
    "35. Ujumbe wa Kilio Kikuu wa Ufunuo 18:1-5; 14:6-12 unatakiwa kuhubiriwa leo kwa Makanisa yote na makundi ambayo bado yanafuata Utatu Mtakatifu na chachu yake [ikiwa ni pamoja na lile linalodai kuwa Kanisa la SDA].",
    "36. Washiriki wa Makanisa haya na makundi [ikiwa ni pamoja na lile linalodai kuwa Kanisa la SDA] ambao kwa hiari wanabaki wameshikamana na Kanisa/kundi lao, baada ya kusikia ukweli na kushurutishwa kwamba ujumbe wa Ufunuo 18 unatumika kwa Kanisa lao,watawajibika kwa dhambi zake na kupoteza uzima wa milele isipokuwa tu kama wakikubali na kuutendea kazi ujumbe huo.",
    "37. Ni muhimu kuhubiri na/au kufundisha kwamba Makanisa haya na makundi [ikiwa ni pamoja na lile linalodai kuwa Kanisa la SDA] ni sehemu ya Babeli iliyoanguka. Msimamo huu unatakiwa kuhubiriwa/kufundishwa kutoka katika mimbari.",
  ];
  return (
    <Wrapper>
      {/* <BackgroundImage imgUrl={Sinai}> */}
      <ImageWrapper>
        <Image width="100vw" height="100vh" src={Sinai} />
        <Image width="100vw" height="100vh" src={Kanuni} />
        <Image width="100vw" height="100vh" src={Sinai} />
        <Image width="100vw" height="100vh" src={Kanuni} />
      </ImageWrapper>
      <Background>
        <RudiNyuma href="http://localhost:3000/">
          <Icon name="IoArrowBack" size={20} color="white" /> Rudi
        </RudiNyuma>
        <TitleText>Kanuni za Msingi za SEVENTH DAY REFORMED REMNANTS</TitleText>
        <PreNormalText>
          “Mmejengwa juu ya msingi wa mitume na manabii, naye Kristo Yesu
          mwenyewe ni jiwe kuu la pembeni.” WAEFESO 2:20 Tunaamini Kwamba:
        </PreNormalText>
        {kanuniText.map((text, i) => {
          return <NormalText key={i}>{text}</NormalText>;
        })}
      </Background>
      {/* </BackgroundImage>   */}
    </Wrapper>
  );
};

const BackgroundImage = styled.div<{ imgUrl?: string }>`
  background: ${(props) => `url(${props.imgUrl})`};
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: repeat-y;
  padding: 56px;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/3;
  grid-row: 1/3;
`;
const Background = styled.div`
  background: #23395d;
  padding: 32px;
  opacity: 95%;
  border-radius: 6px;
  grid-column: 1/3;
  grid-row: 1/3;
  margin: 56px;
`;
const RudiNyuma = styled.a`
  text-decoration: none;
  display: flex;
  gap: 4px;
  color: white;
  background: #23395d;
  padding: 12px;
  border-radius: 6px;
  max-width: 60px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
const TitleText = styled.div`
  font-weight: 400;
  font-size: 38px;

  color: #ffffff;
  align-text: center;
  display: flex;
  justify-content: center;
`;

const NormalText = styled.p`
  line-height: 30px;
  font-weight: 300;
  font-size: 14px;
  color: #ffffff;
  align-text: center;
  display: flex;
`;
const PreNormalText = styled.div`
  line-height: 30px;
  font-weight: 200;
  font-size: 14px;
  color: #ffffff;
  align-text: center;
  display: flex;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;
