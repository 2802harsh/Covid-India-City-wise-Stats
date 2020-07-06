var allStates = new Array("Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Dadra and Nagar Haveli and Daman and Diu","Goa","Gujarat","Himachal Pradesh","Haryana","Jharkhand","Jammu and Kashmir","Karnataka","Kerala","Ladakh","Lakshadweep","Maharashtra","Meghalaya","Manipur","Madhya Pradesh","Mizoram","Nagaland","Odisha","Punjab","Puducherry","Rajasthan","Sikkim","Telangana","Tamil Nadu","Tripura","Uttar Pradesh","Uttarakhand","West Bengal");

var s_a = new Array();
s_a[0]="";
s_a[1]="Nicobars|North and Middle Andaman|South Andaman|Unknown";
s_a[2]="Foreign Evacuees|Anantapur|Chittoor|East Godavari|Guntur|Krishna|Kurnool|Other State|Prakasam|S.P.S. Nellore|Srikakulam|Visakhapatnam|Vizianagaram|West Godavari|Y.S.R. Kadapa";
s_a[3]="Anjaw|Changlang|East Kameng|East Siang|Kamle|Kra Daadi|Kurung Kumey|Lepa Rada|Lohit|Longding|Lower Dibang Valley|Lower Siang|Lower Subansiri|Namsai|Pakke Kessang|Papum Pare|Shi Yomi|Siang|Tawang|Tirap|Upper Dibang Valley|Upper Siang|Upper Subansiri|West Kameng|West Siang";
s_a[4]="Airport Quarantine|Baksa|Barpeta|Biswanath|Bongaigaon|Cachar|Charaideo|Chirang|Darrang|Dhemaji|Dhubri|Dibrugarh|Dima Hasao|Goalpara|Golaghat|Hailakandi|Hojai|Jorhat|Kamrup|Kamrup Metropolitan|Karbi Anglong|Karimganj|Kokrajhar|Lakhimpur|Majuli|Morigaon|Nagaon|Nalbari|Other State|Sivasagar|Sonitpur|South Salmara Mankachar|Tinsukia|Udalguri|West Karbi Anglong|Unknown";
s_a[5]="Araria|Arwal|Aurangabad|Banka|Begusarai|Bhagalpur|Bhojpur|Buxar|Darbhanga|East Champaran|Gaya|Gopalganj|Jamui|Jehanabad|Kaimur|Katihar|Khagaria|Kishanganj|Lakhisarai|Madhepura|Madhubani|Munger|Muzaffarpur|Nalanda|Nawada|Patna|Purnia|Rohtas|Saharsa|Samastipur|Saran|Sheikhpura|Sheohar|Sitamarhi|Siwan|Supaul|Vaishali|West Champaran";
s_a[6]="Chandigarh";
s_a[7]="Other State|Balod|Baloda Bazar|Balrampur|Bametara|Bastar|Bijapur|Bilaspur|Dakshin Bastar Dantewada|Dhamtari|Durg|Gariaband|Janjgir Champa|Jashpur|Kabeerdham|Kondagaon|Korba|Koriya|Mahasamund|Mungeli|Narayanpur|Raigarh|Raipur|Rajnandgaon|Sukma|Surajpur|Surguja|Uttar Bastar Kanker|Gaurela Pendra Marwahi";
s_a[8]="Central Delhi|East Delhi|New Delhi|North Delhi|North East Delhi|North West Delhi|Shahdara|South Delhi|South East Delhi|South West Delhi|West Delhi|Unknown";
s_a[9]="Other State|Dadra and Nagar Haveli|Daman|Diu";
s_a[10]="Other State|North Goa|South Goa|Unknown";
s_a[11]="Other State|Ahmedabad|Amreli|Anand|Aravalli|Banaskantha|Bharuch|Bhavnagar|Botad|Chhota Udaipur|Dahod|Dang|Devbhumi Dwarka|Gandhinagar|Gir Somnath|Jamnagar|Junagadh|Kheda|Kutch|Mahisagar|Mehsana|Morbi|Narmada|Navsari|Panchmahal|Patan|Porbandar|Rajkot|Sabarkantha|Surat|Surendranagar|Tapi|Vadodara|Valsad";
s_a[12]="Bilaspur|Chamba|Hamirpur|Kangra|Kinnaur|Kullu|Lahaul and Spiti|Mandi|Shimla|Sirmaur|Solan|Una";
s_a[13]="Foreign Evacuees|Ambala|Bhiwani|Charkhi Dadri|Faridabad|Fatehabad|Gurugram|Hisar|Italians|Jhajjar|Jind|Kaithal|Karnal|Kurukshetra|Mahendragarh|Nuh|Palwal|Panchkula|Panipat|Rewari|Rohtak|Sirsa|Sonipat|Yamunanagar";
s_a[14]="Bokaro|Chatra|Deoghar|Dhanbad|Dumka|East Singhbhum|Garhwa|Giridih|Godda|Gumla|Hazaribagh|Jamtara|Khunti|Koderma|Latehar|Lohardaga|Pakur|Palamu|Ramgarh|Ranchi|Sahibganj|Saraikela-Kharsawan|Simdega|West Singhbhum";
s_a[15]="Anantnag|Bandipora|Baramulla|Budgam|Doda|Ganderbal|Jammu|Kathua|Kishtwar|Kulgam|Kupwara|Mirpur|Muzaffarabad|Pulwama|Punch|Rajouri|Ramban|Reasi|Samba|Shopiyan|Srinagar|Udhampur";
s_a[16]="Bagalkote|Ballari|Belagavi|Bengaluru Rural|Bengaluru Urban|Bidar|Chamarajanagara|Chikkaballapura|Chikkamagaluru|Chitradurga|Dakshina Kannada|Davanagere|Dharwad|Gadag|Hassan|Haveri|Kalaburagi|Kodagu|Kolar|Koppal|Mandya|Mysuru|Other State|Raichur|Ramanagara|Shivamogga|Tumakuru|Udupi|Uttara Kannada|Vijayapura|Yadgir|Unknown";
s_a[17]="Other State|Alappuzha|Ernakulam|Idukki|Kannur|Kasaragod|Kollam|Kottayam|Kozhikode|Malappuram|Palakkad|Pathanamthitta|Thiruvananthapuram|Thrissur|Wayanad";
s_a[18]="Kargil|Leh";
s_a[19]="Lakshadweep";
s_a[20]="Ahmednagar|Akola|Amravati|Aurangabad|Beed|Bhandara|Buldhana|Chandrapur|Dhule|Gadchiroli|Gondia|Hingoli|Jalgaon|Jalna|Kolhapur|Latur|Mumbai|Mumbai Suburban|Nagpur|Nanded|Nandurbar|Nashik|Osmanabad|Other State|Palghar|Parbhani|Pune|Raigad|Ratnagiri|Sangli|Satara|Sindhudurg|Solapur|Thane|Wardha|Washim|Yavatmal|Unknown";
s_a[21]="East Garo Hills|East Jaintia Hills|East Khasi Hills|North Garo Hills|Ribhoi|South Garo Hills|South West Garo Hills|South West Khasi Hills|West Garo Hills|West Jaintia Hills|West Khasi Hills|Unknown";
s_a[22]="Bishnupur|Chandel|Churachandpur|Imphal East|Imphal West|Jiribam|Kakching|Kamjong|Kangpokpi|Noney|Pherzawl|Senapati|Tamenglong|Tengnoupal|Thoubal|Ukhrul|Unknown";
s_a[23]="Agar Malwa|Alirajpur|Anuppur|Ashoknagar|Balaghat|Barwani|Betul|Bhind|Bhopal|Burhanpur|Chhatarpur|Chhindwara|Damoh|Datia|Dewas|Dhar|Dindori|Guna|Gwalior|Harda|Hoshangabad|Indore|Jabalpur|Jhabua|Katni|Khandwa|Khargone|Mandla|Mandsaur|Morena|Narsinghpur|Neemuch|Niwari|Other Region|Panna|Raisen|Rajgarh|Ratlam|Rewa|Sagar|Satna|Sehore|Seoni|Shahdol|Shajapur|Sheopur|Shivpuri|Sidhi|Singrauli|Tikamgarh|Ujjain|Umaria|Vidisha";
s_a[24]="Aizawl|Champhai|Hnahthial|Khawzawl|Kolasib|Lawngtlai|Lunglei|Mamit|Saiha|Saitual|Serchhip";
s_a[25]="Others|Dimapur|Kiphire|Kohima|Longleng|Mokokchung|Mon|Peren|Phek|Tuensang|Wokha|Zunheboto|Unknown";
s_a[26]="Others|Angul|Balangir|Balasore|Bargarh|Bhadrak|Boudh|Cuttack|Deogarh|Dhenkanal|Gajapati|Ganjam|Jagatsinghpur|Jajpur|Jharsuguda|Kalahandi|Kandhamal|Kendrapara|Kendujhar|Khordha|Koraput|Malkangiri|Mayurbhanj|Nabarangapur|Nayagarh|Nuapada|Puri|Rayagada|Sambalpur|Subarnapur|Sundargarh";
s_a[27]="Amritsar|Barnala|Bathinda|Faridkot|Fatehgarh Sahib|Fazilka|Ferozepur|Gurdaspur|Hoshiarpur|Jalandhar|Kapurthala|Ludhiana|Mansa|Moga|Pathankot|Patiala|Rupnagar|S.A.S. Nagar|Sangrur|Shahid Bhagat Singh Nagar|Sri Muktsar Sahib|Tarn Taran";
s_a[28]="Karaikal|Mahe|Puducherry|Yanam";
s_a[29]="Ajmer|Alwar|Banswara|Baran|Barmer|Bharatpur|Bhilwara|Bikaner|BSF Camp|Bundi|Chittorgarh|Churu|Dausa|Dholpur|Dungarpur|Evacuees|Ganganagar|Hanumangarh|Italians|Jaipur|Jaisalmer|Jalore|Jhalawar|Jhunjhunu|Jodhpur|Karauli|Kota|Nagaur|Other State|Pali|Pratapgarh|Rajsamand|Sawai Madhopur|Sikar|Sirohi|Tonk|Udaipur";
s_a[30]="East Sikkim|North Sikkim|South Sikkim|West Sikkim|Unknown";
s_a[31]="Foreign Evacuees|Other State|Adilabad|Bhadradri Kothagudem|Hyderabad|Jagtial|Jangaon|Jayashankar Bhupalapally|Jogulamba Gadwal|Kamareddy|Karimnagar|Khammam|Komaram Bheem|Mahabubabad|Mahabubnagar|Mancherial|Medak|Medchal Malkajgiri|Mulugu|Nagarkurnool|Nalgonda|Narayanpet|Nirmal|Nizamabad|Peddapalli|Rajanna Sircilla|Ranga Reddy|Sangareddy|Siddipet|Suryapet|Vikarabad|Wanaparthy|Warangal Rural|Warangal Urban|Yadadri Bhuvanagiri|Unknown";
s_a[32]="Railway Quarantine|Airport Quarantine|Other State|Ariyalur|Chengalpattu|Chennai|Coimbatore|Cuddalore|Dharmapuri|Dindigul|Erode|Kallakurichi|Kancheepuram|Kanyakumari|Karur|Krishnagiri|Madurai|Nagapattinam|Namakkal|Nilgiris|Perambalur|Pudukkottai|Ramanathapuram|Ranipet|Salem|Sivaganga|Tenkasi|Thanjavur|Theni|Thiruvallur|Thiruvarur|Thoothukkudi|Tiruchirappalli|Tirunelveli|Tirupathur|Tiruppur|Tiruvannamalai|Vellore|Viluppuram|Virudhunagar";
s_a[33]="Dhalai|Gomati|Khowai|North Tripura|Sipahijala|South Tripura|Unokoti|West Tripura";
s_a[34]="Agra|Aligarh|Ambedkar Nagar|Amethi|Amroha|Auraiya|Ayodhya|Azamgarh|Baghpat|Bahraich|Ballia|Balrampur|Banda|Barabanki|Bareilly|Basti|Bhadohi|Bijnor|Budaun|Bulandshahr|Chandauli|Chitrakoot|Deoria|Etah|Etawah|Farrukhabad|Fatehpur|Firozabad|Gautam Buddha Nagar|Ghaziabad|Ghazipur|Gonda|Gorakhpur|Hamirpur|Hapur|Hardoi|Hathras|Jalaun|Jaunpur|Jhansi|Kannauj|Kanpur Dehat|Kanpur Nagar|Kasganj|Kaushambi|Kushinagar|Lakhimpur Kheri|Lalitpur|Lucknow|Maharajganj|Mahoba|Mainpuri|Mathura|Mau|Meerut|Mirzapur|Moradabad|Muzaffarnagar|Pilibhit|Pratapgarh|Prayagraj|Rae Bareli|Rampur|Saharanpur|Sambhal|Sant Kabir Nagar|Shahjahanpur|Shamli|Shrawasti|Siddharthnagar|Sitapur|Sonbhadra|Sultanpur|Unnao|Varanasi";
s_a[35]="Almora|Bageshwar|Chamoli|Champawat|Dehradun|Haridwar|Nainital|Pauri Garhwal|Pithoragarh|Rudraprayag|Tehri Garhwal|Udham Singh Nagar|Uttarkashi";
s_a[36]="Alipurduar|Bankura|Birbhum|Cooch Behar|Dakshin Dinajpur|Darjeeling|Hooghly|Howrah|Jalpaiguri|Jhargram|Kalimpong|Kolkata|Malda|Murshidabad|Nadia|North 24 Parganas|Other State|Paschim Bardhaman|Paschim Medinipur|Purba Bardhaman|Purba Medinipur|Purulia|South 24 Parganas|Uttar Dinajpur";



window.onload = function () {
var stateArr = document.getElementById("state-id");
var districtArr = document.getElementById("district-id");
for (var state in allStates) {
  //console.log(state);
stateArr.options[stateArr.options.length] = new Option(allStates[state], allStates[state]);
}
stateArr.onchange = function () {
districtArr.length = 1; // remove all options bar first
//console.log(this.selectedIndex);
var district = s_a[this.selectedIndex];
var city_arr = district.split("|");
for (var i = 0; i < city_arr.length; i++) {
districtArr.options[districtArr.options.length] = new Option(city_arr[i], city_arr[i]);
}
}
}

document.querySelector("#button").addEventListener("click", function(){
  var cards = document.querySelectorAll(".case-card");
  cards.forEach(function(card){
    card.classList.remove("hide");
  //console.log(cards);
  });
});
