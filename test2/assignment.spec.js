const { test, expect } = require('@playwright/test');

const scenarios = [
    { 
        id: 'Pos_Fun_0001', 
        input: 'adha pavathina samaaja saha aarThika parisara thaththvaya athara Technology (thaakShaNaya) saha Digital (dijital) seevaa valata laebena vaedhagathkama dhinen dhina vaedi vii aethi athara, ehi praDhaana heethuva vannee janathaavata pahasu saha ikman seevaa labaa ganna puLuvan viima saha viviDha kaalayaka sidhu vana kriyaavaliya ekama Platform ekakin sidhu kara ganna puLuvan viima kiyalaa saDHAhan kaLa yuthuyi. namuth ehema parivarthanayak samaGA ayahapath pravanathaavakuth aethi vii aethi bava aDhYAyana saDHAhan karayi. ema nisaa Data (dhaththa) aarakShaa kiriima, Privacy (paudhgalikathvaya) raekagaeniima saha Technology niyamitha lesa Bhaavithaya piLibaDHAva avaDhaanayak yomu kaLa yuthuyi kiyalaa visheeShaGHAyan saDHAhan karayi.', 
        expected: 'අද පවතින සමාජ සහ ආර්ථික පරිසර තත්ත්වය අතර Technology (තාක්ෂණය) සහ Digital (ඩිජිටල්) සේවා වලට ලැබෙන වැදගත්කම දිනෙන් දින වැඩි වී ඇති අතර, එහි ප්‍රධාන හේතුව වන්නේ ජනතාවට පහසු සහ ඉක්මන් සේවා ලබා ගන්න පුළුවන් වීම සහ විවිධ කාලයක සිදු වන ක්‍රියාවලිය එකම Platform එකකින් සිදු කර ගන්න පුළුවන් වීම කියලා සඳහන් කළ යුතුයි. නමුත් එහෙම පරිවර්තනයක් සමඟ අයහපත් ප්‍රවනතාවකුත් ඇති වී ඇති බව අධ්‍යයන සඳහන් කරයි. එම නිසා Data (දත්ත) ආරක්ෂා කිරීම, Privacy (පෞද්ගලිකත්වය) රැකගැනීම සහ Technology නියමිත ලෙස භාවිතය පිළිබඳව අවධානයක් යොමු කළ යුතුයි කියලා විශේෂඥයන් සඳහන් කරයි.' 
    },
    { 
        id: 'Pos_Fun_0002', 
        input: 'mama dhaen gedhara innee, mata nidhimathayi namuth heta 7.30 AM Zoom meeting ekak thiyenavaa kiyalaa email ekakin notification ekak aavaa. ehema nisaa WiFi hariyata vaeda karanavaadha kiyalaa balalaa, Documents tika attach karalaa ASAP reply ekak yavanna hithan innee. namuth vahina nisaa karant ekath yanna puLuvan kiyalaa baya hithenavaa. oyaalata ehema unahama mokadha karannee?', 
        expected: 'මම දැන් ගෙදර ඉන්නේ, මට නිදිමතයි නමුත් හෙට 7.30 AM Zoom meeting එකක් තියෙනවා කියලා email එකකින් notification එකක් ආවා. එහෙම නිසා WiFi හරියට වැඩ කරනවාද කියලා බලලා, Documents ටික attach කරලා ASAP reply එකක් යවන්න හිතන් ඉන්නේ. නමුත් වහින නිසා කරන්ට් එකත් යන්න පුළුවන් කියලා බය හිතෙනවා. ඔයාලට එහෙම උනහම මොකද කරන්නේ?' 
    },
    { 
        id: 'Pos_Fun_0003', 
        input: 'oyaata puLuvandha karuNaakaralaa magee office eka vennee traffic nisaa kiyalaa manager WhatsApp message ekak evanna? mokadha mata adha bas eka leet vuNaa saha koLaBA yanna hadhannee kiyalaa api kavuruth dhannee naehae. ehema vuNoth api passee kathaa karamu kiyalaa polite vidhihakata kiyanna oonee. mokadha ehema naethnam issue ekak venna puLuvan.', 
        expected: 'ඔයාට පුළුවන්ද කරුණාකරලා මගේ office එක වෙන්නේ traffic නිසා කියලා manager WhatsApp message එකක් එවන්න? මොකද මට අද බස් එක ලේට් වුණා සහ කොළඹ යන්න හදන්නේ කියලා අපි කවුරුත් දන්නේ නැහැ. එහෙම වුණොත් අපි පස්සේ කතා කරමු කියලා polite විදිහකට කියන්න ඕනේ. මොකද එහෙම නැත්නම් issue එකක් වෙන්න පුළුවන්.' 
    },
    { 
        id: 'Pos_Fun_0004', 
        input: 'api iiLaGA sathiyee mahanuvara valata trip ekak yamu kiyalaa yoojanaa vuNaa, namuth appachchi kiyannee vaessa vuNoth yanna epaayi kiyalaa. ehema vuNath mama kiyalaa thiyenavaa mata baya naehae kiyalaa. haebaeyi hotel booking, NIC, cash Rs. 5343 saha ATM card tika ready karalaa thiyanna oonee kiyalaa mama hariyata plaeen karanavaa. supiri trip ekak vennee ehema hariyata haedhuvoth.', 
        expected: 'අපි ඊළඟ සතියේ මහනුවර වලට trip එකක් යමු කියලා යෝජනා වුණා, නමුත් අප්පච්චි කියන්නේ වැස්ස වුණොත් යන්න එපායි කියලා. එහෙම වුණත් මම කියලා තියෙනවා මට බය නැහැ කියලා. හැබැයි hotel booking, NIC, cash Rs. 5343 සහ ATM card ටික ready කරලා තියන්න ඕනේ කියලා මම හරියට ප්ලෑන් කරනවා. සුපිරි trip එකක් වෙන්නේ එහෙම හරියට හැදුවොත්.' 
    },
    { 
        id: 'Pos_Fun_0005', 
        input: '"anee machQQ, idea ekak thiyenavaa, api TikTok saha LinkedIn dhekeema vaeda karalaa side income ekak hadhamu kiyalaa, namuth oyaa ennee naehae. ehema karapan kiyalaa kamaand vidhihakata kiyannath baehae. karuNaakaralaa poddak balanna kiyalaa polite vidhihakata request karanna oonee. mokadha friendship eka kiyana eka eka eka dheeta kadaa ganna baehae kiyalaa mama hoDHAta dhannavaa."', 
        expected: '"අනේ මචං, idea එකක් තියෙනවා, අපි TikTok සහ LinkedIn දෙකේම වැඩ කරලා side income එකක් හදමු කියලා, නමුත් ඔයා එන්නේ නැහැ. එහෙම කරපන් කියලා කමාන්ඩ් විදිහකට කියන්නත් බැහැ. කරුණාකරලා පොඩ්ඩක් බලන්න කියලා polite විදිහකට request කරන්න ඕනේ. මොකද friendship එක කියන එක එක එක දේට කඩා ගන්න බැහැ කියලා මම හොඳට දන්නවා."' 
    },
    { 
        id: 'Pos_Fun_0006', 
        input: 'kohomadha oyaata? suba udhaeesanak kiyalaa mama kool ekak gaththaa, namuth oyaa kivvee mata baya hithenavaa exam eka nisaa kiyalaa. ehema nisaa mama kivvee hari hari tikak hariyata kaeema kanna, poddak inna, passee API, CPU, RAM, OS vagee technical dheeth tika tika balalaa vaeda karamu kiyalaa. mokadha stres eka adu karaganna eka hari vaedhagath', 
        expected: 'කොහොමද ඔයාට? සුබ උදෑසනක් කියලා මම කෝල් එකක් ගත්තා, නමුත් ඔයා කිව්වේ මට බය හිතෙනවා exam එක නිසා කියලා. එහෙම නිසා මම කිව්වේ හරි හරි ටිකක් හරියට කෑම කන්න, පොඩ්ඩක් ඉන්න, පස්සේ API, CPU, RAM, OS වගේ technical දේත් ටික ටික බලලා වැඩ කරමු කියලා. මොකද ස්ට්‍රෙස් එක අඩු කරගන්න එක හරි වැදගත්' 
    },
    { 
        id: 'Pos_Fun_0007', 
        input: 'mama dhaen gedhara innee, namuth heta 7.30 AM Zoom meeting ekak thiyenavaa kiyalaa email ekak aavaa, ehema nisaa WiFi hariyata vaeda karanavaadha kiyalaa balanna oonee.', 
        expected: 'මම දැන් ගෙදර ඉන්නේ, නමුත් හෙට 7.30 AM Zoom meeting එකක් තියෙනවා කියලා email එකක් ආවා, එහෙම නිසා WiFi හරියට වැඩ කරනවාද කියලා බලන්න ඕනේ.' 
    },
    { 
        id: 'Pos_Fun_0008', 
        input: 'oyaata puLuvandha karuNaakaralaa magee office eka late vennee traffic nisaa kiyalaa manager WhatsApp message ekak evanna, mokadha bas eka leet vuNaa.', 
        expected: 'ඔයාට පුළුවන්ද කරුණාකරලා මගේ office එක late වෙන්නේ traffic නිසා කියලා manager WhatsApp message එකක් එවන්න, මොකද බස් එක ලේට් වුණා.' 
    },
    { 
        id: 'Pos_Fun_0009', 
        input: 'api iiLaGA sathiyee mahanuvara valata trip ekak yamu kiyalaa plaeen karaa, namuth vaessa vuNoth yanna epaayi kiyalaa ammaa kiyanavaa.', 
        expected: 'අපි ඊළඟ සතියේ මහනුවර වලට trip එකක් යමු කියලා ප්ලෑන් කරා, නමුත් වැස්ස වුණොත් යන්න එපායි කියලා අම්මා කියනවා.' 
    },
    { 
        id: 'Pos_Fun_0010', 
        input: 'dhaen ithin monavaadha karannee kiyalaa ahanna vennee naehae, mokadha plan eka clear, OTP, PIN saha QR Code dhekama test karalaa thiyenavaa.', 
        expected: 'දැන් ඉතින් මොනවාද කරන්නේ කියලා අහන්න වෙන්නේ නැහැ, මොකද plan එක clear, OTP, PIN සහ QR Code දෙකම test කරලා තියෙනවා.' 
    },
    { 
        id: 'Pos_Fun_0011', 
        input: 'oyaata karuNaakaralaa magee website ekee URL ekak dhaanna puLuvandha kiyalaa ahalaa thiyenavaa, mokakdha miita passee API key eka manage karannee eyaa kiyalaa?', 
        expected: 'ඔයාට කරුණාකරලා මගේ website එකේ URL එකක් දාන්න පුළුවන්ද කියලා අහලා තියෙනවා, මොකක්ද මීට පස්සේ API key එක manage කරන්නේ එයා කියලා?' 
    },
    { 
        id: 'Pos_Fun_0012', 
        input: 'mama iiyee gedhara giyaa, passee mama email ekak send karalaa thiyenavaa "meeting postponed" kiyalaa, ehema vuNoth kalin notify karanna epaa kiyalaa client kenek kivvaa', 
        expected: 'මම ඊයේ ගෙදර ගියා, පස්සේ මම email එකක් send කරලා තියෙනවා "meeting postponed" කියලා, එහෙම වුණොත් කලින් notify කරන්න එපා කියලා client කෙනෙක් කිව්වා' 
    },
    { 
        id: 'Pos_Fun_0013', 
        input: 'issarahata yanna, vahaama enna kiyalaa simple commands dhenavaanam, polite form ekakata karuNaakaralaa kiyalaa request karanna puLuvannam response aDhikayak laebenavaa.', 
        expected: 'ඉස්සරහට යන්න, වහාම එන්න කියලා simple commands දෙනවානම්, polite form එකකට කරුණාකරලා කියලා request කරන්න පුළුවන්නම් response අධිකයක් ලැබෙනවා.' 
    },
    { 
        id: 'Pos_Fun_0014', 
        input: 'eLa machQQ! siraavata supiri dheyak thiyenavaa namuth mama tika tika proofreading karalaa send karanna oonee, hari hari repeat karanna epaa kiyalaa hithan innee.', 
        expected: 'එළ මචං! සිරාවට සුපිරි දෙයක් තියෙනවා නමුත් මම ටික ටික proofreading කරලා send කරන්න ඕනේ, හරි හරි repeat කරන්න එපා කියලා හිතන් ඉන්නේ.' 
    },
    { 
        id: 'Pos_Fun_0015', 
        input: 'obata suba paethum.', 
        expected: 'ඔබට සුබ පැතුම්.' 
    },
    { 
        id: 'Pos_Fun_0016', 
        input: 'magee phone eka hari.', 
        expected: 'මගේ phone එක හරි.' 
    },
    { 
        id: 'Pos_Fun_0017', 
        input: 'wifi eka off vuna.', 
        expected: 'wifi එක off වුන.' 
    },
    { 
        id: 'Pos_Fun_0018', 
        input: 'email tika balanna.', 
        expected: 'email ටික බලන්න.' 
    },{ 
        id: 'Pos_Fun_0019', 
        input: 'heta meeting thiyenavaa.', 
        expected: 'හෙට meeting තියෙනවා.' 
    },
    { 
        id: 'Pos_Fun_0020', 
        input: 'password eka remember?', 
        expected: 'password එක remember?' 
    },
    { 
        id: 'Pos_Fun_0021', 
        input: 'mata tea ekak dhenna', 
        expected: 'මට tea එකක් දෙන්න' 
    },
    { 
        id: 'Pos_Fun_0022', 
        input: 'mama file eka scan karanavaa', 
        expected: 'මම file එක scan කරනවා' 
    },
    { 
        id: 'Pos_Fun_0023', 
        input: 'mata eka theeruNee nae.', 
        expected: 'මට එක තේරුණේ නැ.' 
    },
    { 
        id: 'Pos_Fun_0024', 
        input: 'oya call ekak dhunnadha?', 
        expected: 'ඔය call එකක් දුන්නද?' 
    },
    { 
        id: 'Neg_Fun_0001', 
        input: 'mama iiyee paasal giyaa, eyaa gedhara giyaa kiyala amma kiyuwe, namuth mata eeka hariyata therune naee mokadha SMS ekak aavila thiyenavaa “meeting TBA, ETA unknown” kiyala, ehema messages thiyeddi man poddak amaarui kiyala hithenavaa, habai ov eeka hari kiyala response ekak dunnoth loku prashnayak nathi venavaa kiyala mama adahas karanavaa.', 
        expected: 'මම ඊයේ පාසල් ගියා, එයා ගෙදර ගියා කියලා අම්මා කිව්වේ, නමුත් මට ඒක හරියට තේරුණේ නැහැ මොකද SMS එකක් ඇවිල්ලා තියෙනවා “meeting TBA, ETA unknown” කියලා. එහෙම messages තියෙද්දි මං පොඩ්ඩක් අමාරුයි කියලා හිතෙනවා, හැබැයි ඔව් ඒක හරි කියලා response එකක් දුන්නොත් ලොකු ප්‍රශ්නයක් නැති වෙනවා කියලා මම අදහස් කරනවා.' 
    },
    { 
        id: 'Neg_Fun_0002', 
        input: 'Zoom meeting ekee link eka WhatsApp karanna puluvandha kiyala mama ahapu gaman, eyaa kiyuwe karannam kiyala, namuth file eka attach karanna amathaka vuna kiyala passe kiyala, ehema chuttak chuttak mistakes venne api kauruth manussa nisaa kiyala mama kiyuwe, appatasiri ehema deyata loku case hadaganna epa kiyala informal widihakata kathaa karalaa issue eka settle karaa.', 
        expected: 'Zoom meeting එකේ link එක WhatsApp කරන්න පුළුවන්ද කියලා මම අහපු ගමන්, එයා කිව්වේ කරන්නම් කියලා, නමුත් file එක attach කරන්න අමතක වුණා කියලා පස්සේ කිව්වා. එහෙම චුට්ටක් චුට්ටක් mistakes වෙන්නේ අපි කවුරුත් මනුස්සයෝ නිසා කියලා මම කිව්වේ. අප්පටසිරි, එහෙම දේට ලොකු case හදාගන්න එපා කියලා informal විදිහකට කතා කරලා issue එක settle කළා.' 
    },
    { 
        id: 'Neg_Fun_0003', 
        input: 'mamage dharayanavaa kiyala typo ekak vunaoth system eka crash wenne naha, namuth user kenekta confusion ekak venna puluvan, ehema nisaa proper spacing, punctuation, “ ? ! ( ) ” vagee symbols hariyata use karanna onee kiyala training session ekedi explain karaa, mokadha formatting hariyata thibboth data handling eka hariyata vaeda karanavaa kiyala mama vishvaasa karanavaa.', 
        expected: 'මගේ දරනවා කියලා typo එකක් වුණොත් system එක crash වෙන්නේ නැහැ, නමුත් user කෙනෙක්ට confusion එකක් වෙන්න පුළුවන්. එහෙම නිසා proper spacing, punctuation, “ ? ! ( ) ” වගේ symbols හරියට use කරන්න ඕනේ කියලා training session එකේදී explain කළා. මොකද formatting හරියට තිබ්බොත් data handling එක හරියට වැඩ කරනවා කියලා මම විශ්වාස කරනවා.' 
    },
    { 
        id: 'Neg_Fun_0004', 
        input: 'karuNaakara eeka dhenavadha kiyala polite widihakata ahapu deyak, eeka dhiyan kiyala slang widihakata kiyapu deyak, dekema meaning eka unath context eka anuva loku venaskamak thiyenavaa, ehema nisaa API documentation, FAQ saha user guide ekedi examples dekak dekak dala explain karanna onee kiyala mama hithan inne, mokadha ela experience ekak labanna ehema hariyata hadhanna onee.', 
        expected: 'කරුණාකර ඒක දෙනවාද කියලා polite විදිහකට අහපු දෙයක්, ඒක දියන් කියලා slang විදිහකට කියපු දෙයක්, දෙකේම meaning එක වුණත් context එක අනුව ලොකු වෙනස්කමක් තියෙනවා. එහෙම නිසා API documentation, FAQ සහ user guide එකේදී examples දෙකක් දෙක් දාලා explain කරන්න ඕනේ කියලා මම හිතන් ඉන්නේ. මොකද එළ experience එකක් ලබන්න එහෙම හරියට හදන්න ඕනේ.' 
    },
    { 
        id: 'Neg_Fun_0005', 
        input: 'mata eeka epaa kiyala ahala thibuna nisa mama dakshina hadala ewa karanna neha, negation patterns sitina sentences walata attention denna ona.', 
        expected: 'මට ඒක එපා කියලා අහලා තිබුණ නිසා මම දක්ෂිණ හදලා ඒවා කරන්නෙ නැහැ, negation patterns සිටින sentences වලට attention දෙන්න ඕන.' 
    },
    { 
        id: 'Neg_Fun_0006', 
        input: 'Zoom, WhatsApp, Email, WiFi vage English brand terms mix karanawa namuth sentence structure clear thiyenawanam NLP model ekata training kalaama hariyata handle wenna puluvan.', 
        expected: 'Zoom, WhatsApp, Email, WiFi වගේ English brand terms mix කරනවා නමුත් sentence structure clear තියෙනවානම් NLP model එකට training කළාම හරියට handle වෙන්න පුළුවන්.' 
    },
    { 
        id: 'Neg_Fun_0007', 
        input: 'kohida oya innne?', 
        expected: 'කොහෙද ඔයා ඉන්නේ' 
    },
    { 
        id: 'Neg_Fun_0008', 
        input: 'oya danne nadda?', 
        expected: 'ඔයා දන්නේ නැද්ද?' 
    },
    { 
        id: 'Neg_Fun_0009', 
        input: 'oya samahara deyak?', 
        expected: 'ඔයා සමහර දෙයක්?' 
    },
    { 
        id: 'Neg_Fun_0010', 
        input: 'file eka open wenne ne.', 
        expected: 'ෆයිල් එක ඕපන් වෙන්නේ නැහැ.' 
    }
    ];

test.describe('Singlish Translation Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { 
            waitUntil: 'load', 
            timeout: 60000 
        });
    });

    for (const data of scenarios) {
        test(`Testing ${data.id} - ${data.input}`, async ({ page }) => {
            const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
            
            await page.waitForTimeout(2000);
            await inputField.fill(''); 
            await inputField.fill(data.input); 

            await page.waitForTimeout(5000); 

            const outputField = page.locator('.card').filter({ hasText: 'Sinhala' }).locator('div.whitespace-pre-wrap');
            const actualText = (await outputField.innerText()).trim();

            console.log(`Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`);

            expect(actualText).toBe(data.expected);
        });
    }
});