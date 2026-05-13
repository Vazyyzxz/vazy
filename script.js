// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elements for the Song Detail Page (will not be used immediately when clicking on a song, but will still be loaded)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Add this
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Add this


// App State
let songs = [
{
    id: 1,
    title: "Hoa sữa",
    artist: "JustaTee, Mr.A, Kimmese",
    album: "?",
    albumArtUrl: "img/hoa sua.png",
    audioSrc: "audio/hoa sua.mp3",
    videoBgSrc: "?",
    lyrics: [
        { time: 27.75, text: "Dưới gió thu tràn về, con phố đón với đưa \"mùa hè\", thơm nồng nàn hoa sữa rơi" },
        { time: 34.25, text: "Ngỡ đó như hôm qua, mà đã thấy gió ấm tan dần vào 1 mùa hè đã cuốn đi" },
        { time: 39.65, text: "Để, để nghe màu hoa đó màu trắng tươi như khi đi bên anh em hé môi" },
        { time: 46.65, text: "Và, còn ngày nào hương làn gió có lẫn mùi hoa sữa thơm rồi sẽ còn là ngày em với anh nắm tay đi hết con phố này" },
        { time: 54.38, text: "Hoa Sữa rơi vây đầy quanh trên đường nơi anh thường đi với em" },
        { time: 60.92, text: "Hoa Sữa mang anh gần em khi ngày qua đợi chờ gió đem hương về" },
        { time: 67.92, text: "Hoa Sữa rơi anh nhặt lên đưa vào tay em đặt trên mái tóc em" },
        { time: 74.63, text: "Hoa Sữa ơi sao để bên em dài lâu đây anh đếm cánh hoa này" },
        { time: 81.63, text: "Hoa Sữa rơi vây đầy quanh trên đường nơi anh thường đi với em" },
        { time: 88.38, text: "Hoa Sữa mang anh gần em khi ngày qua đợi chờ gió đem hương về" },
        { time: 95.38, text: "Hoa Sữa rơi anh nhặt lên đưa vào tay em đặt trên mái tóc em" },
        { time: 102.13, text: "Hoa Sữa ơi sao để bên em dài lâu đây anh đếm cánh hoa này" },
        { time: 109.48, text: "Khi hoa rơi trước sân sau những bước chân sương hoà tan bụi phấn" },
        { time: 113.63, text: "Khi em tàn phai để lại mùi hương trong anh lá vàng còn vẫn" },
        { time: 116.90, text: "Là hôm qua thôi đầy vương vấn 1 mùa thu dắt em đi qua những thăng trầm để anh biết" },
        { time: 121.02, text: "Như 1 phần nào đó trong 2 đứa như muốn gần lại vì mình vẫn cần nhau như lần đầu tiên tìm về ngọt ngào trong ký ức dần đưa" },
        { time: 127.13, text: "Anh muốn về bên những vệt nắng" },
        { time: 128.79, text: "Ủ rũ in lên tường với 1 màu trắng" },
        { time: 130.07, text: "Hà Nội cũ nắm tay em vắng tanh phố không người chắc gì em còn giữ?" },
        { time: 134.05, text: "Những đắm say anh ngắm đây cánh hoa này tàn theo gió cùng mùa thu" },
        { time: 137.39, text: "Dưới gió thu tràn về, con phố đón với đưa \"mùa hè\", thơm nồng nàn hoa sữa rơi" },
        { time: 144.13, text: "Ngỡ đó như hôm qua, mà đã thấy gió ấm tan dần vào 1 mùa hè đã cuốn đi" },
        { time: 149.57, text: "Để, để nghe màu hoa đó màu trắng tươi như khi đi bên anh em hé môi" },
        { time: 156.26, text: "Và, còn ngày nào hương làn gió có lẫn mùi hoa sữa thơm rồi sẽ còn là ngày em với anh nắm tay đi hết con phố này" },
        { time: 163.95, text: "Hoa Sữa rơi vây đầy quanh trên đường nơi anh thường đi với em" },
        { time: 170.33, text: "Hoa Sữa mang anh gần em khi ngày qua đợi chờ gió đem hương về" },
        { time: 177.45, text: "Hoa Sữa rơi anh nhặt lên đưa vào tay em đặt trên mái tóc em" },
        { time: 184.44, text: "Hoa Sữa ơi sao để bên em dài lâu đây anh đếm cánh hoa này" },
        { time: 191, text: "~" },
        { time: 219.60, text: "Vội vã, chút nắng phai giao mùa" },
        { time: 222.16, text: "Muốn nhắc cho em mùa thu sang và ngày từng yêu anh" },
        { time: 225.57, text: "I can do, anything" },
        { time: 229.51, text: "Để màu hoa anh nhặt lên, đưa vào tay em còn mang trên mái tóc em" },
        { time: 232.58, text: "Còn mãi..." },
        { time: 232.75, text: "Mùa thu đến, có nói với em rằng, baby I miss U" },
        { time: 239.01, text: "Một màu hoa sữa rơi rồi vì ngày đó anh không thể giữ (Can u feel me?)" },
        { time: 246.33, text: "Để rồi mỗi năm trôi qua, tiếng lá rơi theo bước chân của anh" },
        { time: 250.71, text: "(Tìm về nơi yên bình)" },
        { time: 252.67, text: "Vì mùa thu đến, có nói với em" },
        { time: 255.89, text: "MÀU VÀNG CỦA LÁ KIA KHÔNG THỂ XANH, TRỞ LẠI?" },
        { time: 293.99, text: "" }
    ]
},
{
    id: 2,
    title: "Blue Tequila",
    artist: "Táo",
    album: "Blue Tequila",
    albumArtUrl: "img/blue tequila.png",
    audioSrc: "audio/blue tequila.mp3",
    videoBgSrc: "?",
    lyrics: [
        { time: 0.09, text: "Hai tequila như mọi khi trong tuần" },
        { time: 3.00, text: "Nhạc bật Frank Sinatra nhưng mà tôi không cần" },
        { time: 6.93, text: "Buồn phiền từ đâu lao đến đây vây quanh" },
        { time: 10.36, text: "Mệt nhoài cùng tôi đang nắm tay" },
        { time: 13.76, text: "Em ra ban công vô tình đi ngang quầy" },
        { time: 16.89, text: "Hình như em đang say sau vài ly vang đầy" },
        { time: 20.52, text: "Tình cờ đời ta va lấy nhau, không may" },
        { time: 24.08, text: "Người tìm được tôi nơi đáy sâu" },
        { time: 27.48, text: "Bồi hồi nhìn nhau điếu thuốc kia đang tàn" },
        { time: 30.86, text: "Ngoài đường dòng xe nối tiếp nhau vội vàng" },
        { time: 34.33, text: "Nhiều lần hợp tan nuối tiếc trong muộn màng" },
        { time: 37.63, text: "Giờ chỉ cầu ai đó xoá đi thời gian" },
        { time: 41.14, text: "Đừng làm trời lên khói thuốc kia thay màu" },
        { time: 44.57, text: "Đừng làm bầu không khí chuốc thêm ưu sầu" },
        { time: 48.05, text: "Đừng làm tình ta sẽ chết ngay ban đầu" },
        { time: 51.49, text: "Dù mập mờ không biết sẽ đi về đâu" },
        { time: 54.68, text: "Và người nhìn bằng đôi mắt khép hờ lại bờ môi" },
        { time: 58.13, text: "Một người làm lòng tôi muốn có một người cần tôi" },
        { time: 61.76, text: "Sau bao dối gian trong đời" },
        { time: 65.20, text: "Yêu đương hoá ra không lời, nên..." },
        { time: 68.37, text: "Người chìm mình vào ao ước biến cuộc tình thành phim" },
        { time: 71.88, text: "Người vì vài lần đau đớn bắt lòng mình lặng im" },
        { time: 75.51, text: "Riêng tôi sẽ luôn yêu người" },
        { time: 78.97, text: "Như tôi đã luôn yêu người" },
        { time: 82.10, text: "Từ đầu" },
        { time: 85.55, text: "Em thở nhẹ một sợi khói, khiến bầu trời vỡ làm hai nửa" },
        { time: 89.14, text: "Nếu mà anh không tới, thì cả đời đâu còn ai sửa" },
        { time: 92.45, text: "Đóm lửa đỏ trên đầu thuốc rơi vào gạt tàn như thể sao băng" },
        { time: 96.07, text: "Hồn anh như lạc đàn ở giữa bạt ngàn góc rễ bao quanh" },
        { time: 99.27, text: "Xin lỗi vì lòng hơi say" },
        { time: 101.04, text: "Trong đầu thì đầy chếnh choáng" },
        { time: 102.97, text: "Cảm ơn những nỗi buồn vì đã đưa đôi chân này đến quán" },
        { time: 106.07, text: "Anh biết là nếu đêm tàn sẽ kéo thêm ngàn suy nghĩ miên man" },
        { time: 109.78, text: "Nên là, vui đi, để tim mình liên hoan" },
        { time: 114.72, text: "" },
        { time: 140.23, text: "Người khép đôi hàng mi không sầu vương đang nhìn tôi" },
        { time: 143.74, text: "Người khiến tôi nhận ra tôi chỉ yêu em mà thôi" },
        { time: 147.48, text: "Sau bao dối gian trong đời" },
        { time: 150.96, text: "Yêu đương hoá ra không lời, nên..." },
        { time: 154.02, text: "Còn có bao người mong cho tình yêu kia thành phim" },
        { time: 157.47, text: "Và có bao người đau nên buộc con tim lặng im" },
        { time: 160.92, text: "Riêng tôi sẽ luôn yêu người" },
        { time: 164.66, text: "Như tôi vẫn luôn yêu người" },
        { time: 168.00, text: "Hai tequila như mọi khi trong tuần" },
        { time: 170.97, text: "Nhạc bật Frank Sinatra nhưng mà tôi không cần" },
        { time: 174.63, text: "Mệt nhoài từ đâu lao đến đây vây quanh" },
        { time: 178.36, text: "Buồn phiền cùng tôi đang nắm tay" },
        { time: 181.76, text: "Em ra ban công vô tình đi ngang quầy" },
        { time: 184.91, text: "Hình như em đang say sau vài ly vang đầy" },
        { time: 188.39, text: "Và rồi đời ta va lấy nhau, không may" },
        { time: 192.03, text: "Người tìm được tôi nơi đáy sâu" }
    ]
},    
{
    id: 3,
    title: "id 072019",
    artist: "w/n",
    album: "id 072019",
    albumArtUrl: "img/id 072019.png",
    audioSrc: "audio/id 072019.mp3",
    videoBgSrc: "?",
    lyrics: [
        { time: 18.73, text: "Có cơn mưa nào đôi mình đi qua" },
        { time: 22.90, text: "Anh đến bên em ngày đôi mình chia xa" },
        { time: 27.17, text: "Mùa lá rơi bên hồ, nỗi cô đơn lớn lên" },
        { time: 35.85, text: "Mùa thu ấy em không còn bên cạnh anh nữa" },
        { time: 40.12, text: "Anh vẫn đứng nơi đây chờ em cùng cơn mưa" },
        { time: 44.60, text: "Chúng ta sau này chẳng có chúng ta bây giờ" },
        { time: 52.45, text: "Một người âm thầm đứng dưới mưa nhìn em" },
        { time: 57.11, text: "Một người giữa thành phố vẫn cứ chờ em" },
        { time: 61.37, text: "Vì sao?" },
        { time: 63.11, text: "Cứ nơi đó mà, ánh dương giờ nơi đâu?" },
        { time: 70.66, text: "Giờ này chỉ nỗi nhớ cứ mãi nhiều thêm" },
        { time: 74.88, text: "Giờ này chỉ mình ta với những tháng năm dài" },
        { time: 79.49, text: "Có khi em chẳng còn yêu anh" },
        { time: 82.37, text: "Nhưng trái tim ta từng chung lối đi" },
        { time: 89.10, text: "Anh đi một vòng thị trấn trên con đường cũ ta đi" },
        { time: 93.33, text: "Vòng bánh xe cứ thế cứ chạy, hai tuyến đường ngược chiều ta nghĩ" },
        { time: 97.51, text: "Chắc em cũng quên tên đường này rồi, nhánh hoa sữa nhẹ bay đi khắp lối" },
        { time: 101.81, text: "Em cũng như anh của ngày trước, hai con đường về nhà kia sập tối" },
        { time: 106.28, text: "Anh còn nhớ hồi đó ta đi học, lúc tan trường thì em ở sau xe" },
        { time: 110.50, text: "Lúc em buồn thì anh hay trêu chọc, bảo em cười, kể chuyện cho nhau nghe" },
        { time: 115.15, text: "Rồi vào quán, mua món mà em thích, em mỉm cười làm anh cũng vui lây" },
        { time: 119.35, text: "Nhưng hồi đó thì vẫn là hồi đó, anh cảm ơn em đã để lại chuỗi ngày yêu" },
        { time: 123.75, text: "Một người âm thầm đứng dưới mưa nhìn em" },
        { time: 127.15, text: "Một người giữa thành phố vẫn cứ chờ em" },
        { time: 131.38, text: "Vì sao?" },
        { time: 132.72, text: "Cứ nơi đó mà, ánh dương giờ nơi đâu?" },
        { time: 139.92, text: "Giờ này chỉ nỗi nhớ cứ mãi nhiều thêm" },
        { time: 144.43, text: "Giờ này chỉ mình ta với những tháng năm dài" },
        { time: 148.98, text: "Có khi em chẳng còn yêu anh" },
        { time: 151.93, text: "Nhưng trái tim ta từng chung lối đi" },
        { time: 158.99, text: "" },
        { time: 206.20, text: "Có cơn mưa nào đôi mình đi qua" },
        { time: 210.92, text: "Anh viết cho em bài ca mùa yêu xa" },
        { time: 214.63, text: "Mùa lá rơi bên hồ, nỗi cô đơn lớn lên" },
        { time: 220.97, text: "" },
        { time: 223.28, text: "Mùa thu ấy anh không còn bên cạnh em nữa" },
        { time: 228.27, text: "Em vẫn đứng nơi đây chờ anh cùng cơn mưa" },
        { time: 232.35, text: "Chúng ta sau này chẳng có chúng ta bây giờ" },
        { time: 237.19, text: "" }
    ]
},
{
    id: 4,
    title: "Em Không Quay Về",
    artist: "Hoàng Tôn",
    album: "Em Không Quay Về",
    albumArtUrl: "img/em khong quay ve.png",
    audioSrc: "audio/em khong quay ve.mp3",
    videoBgSrc: "?",
    lyrics: [
        { time: 12.53, text: "Haw oh woh oh woh oh ah" },
        { time: 15.79, text: "Haw oh woh oh woh oh ah" },
        { time: 19.10, text: "Haw oh" },
        { time: 21.10, text: "Yeah heh yeah" },
        { time: 24.50, text: "Kể từ khi người đi mùa đông càng rét thêm" },
        { time: 28.05, text: "Cho lòng anh ngày đêm nghĩ đến em" },
        { time: 31.08, text: "Anh vẫn luôn nhớ về" },
        { time: 33.62, text: "Từng lời ta cùng nhau ước thề" },
        { time: 37.32, text: "Nhưng giờ đây tình yêu đã vỡ tan" },
        { time: 40.62, text: "Để mình anh hòa theo từng làn gió miên man" },
        { time: 45.75, text: "Lang thang nơi đó woh uh" },
        { time: 49.78, text: "Nơi yên vui nay đã mãi xa một người chỉ còn nỗi nhớ" },
        { time: 55.48, text: "Đành lạc loài chơ vơ như cánh én mãi nơi phương nào" },
        { time: 61.24, text: "Và giờ người ra đi" },
        { time: 64.24, text: "Trong con tim không nghĩ suy" },
        { time: 67.31, text: "Để lệ hoen đôi mi anh cần chi những hoài nghi khi em không trở lại" },
        { time: 73.82, text: "Chỉ còn lại đôi vai" },
        { time: 76.55, text: "Trong cơn mơ không có ai (oh)" },
        { time: 80.01, text: "Lời ngọt ngào bên tai về ngày mai anh đã sai" },
        { time: 83.20, text: "Em không quay về" },
        { time: 86.12, text: "Vì em không quay về" },
        { time: 87.34, text: "Uh oah em không quay về" },
        { time: 90.44, text: "Uh oah em không quay về (wao)" },
        { time: 94.00, text: "Không quay về (let me talk to you now)" },
        { time: 96.22, text: "Nào lật lại quá khứ" },
        { time: 97.76, text: "Và một lần nhìn về mọi chuyện xem đâu là lý do" },
        { time: 100.20, text: "Khiến cho hai ta hai nơi phương xa" },
        { time: 102.31, text: "Em hãy nói xem những điều từ trước giờ em không thật thà" },
        { time: 105.80, text: "Em cứ ngây thơ rồi bất ngờ quay ngoắt cho anh mắt mờ" },
        { time: 108.97, text: "Em hãy nói xem còn điều gì trong khi yêu anh em vẫn muốn giấu (a í a)" },
        { time: 113.03, text: "Hay tại vài tờ tiền polyme đang phe phất xung quanh em đủ loại màu (a í a)" },
        { time: 115.90, text: "Cộng thêm từng lời ngọt ngào đầy mùi rượu của vài ba gã nhà giàu" },
        { time: 118.65, text: "Trong đêm khuya đưa em tìm lại một vài cuộc tình tại" },
        { time: 120.38, text: "Vài ba chiếc nhà lầu" },
        { time: 122.02, text: "Em hãy nói xem còn điều gì em vẫn muốn giấu (nơi yên vui nay đã mãi xa một người chỉ còn lại nỗi nhớ)" },
        { time: 129.97, text: "Đành lạc loài và chơ vơ như cánh én mãi nơi phương nào" },
        { time: 136.05, text: "Và giờ người ra đi" },
        { time: 138.87, text: "Trong con tim không nghĩ suy" },
        { time: 142.21, text: "Để lệ hoen đôi mi anh cần chi những hoài nghi" },
        { time: 145.10, text: "Khi em không trở lại (khi em không trở lại)" },
        { time: 148.64, text: "Chỉ còn lại đôi vai" },
        { time: 151.42, text: "Trong cơn mưa không có ai" },
        { time: 154.62, text: "Lời ngọt ngào bên tai về ngày mai anh đã sai" },
        { time: 157.92, text: "Em không quay về" },
        { time: 160.87, text: "Vì em không quay về" },
        { time: 162.11, text: "Uh oah em không quay về" },
        { time: 165.30, text: "Uh oah em không quay về" },
        { time: 168.77, text: "Không quay về uh hoh" },
        { time: 173.43, text: "Oh người ra đi để cho lòng anh thêm đau" },
        { time: 177.50, text: "Phải làm sao để anh quên đi được em (quên đi được em)" },
        { time: 183.10, text: "Người yêu hỡi" },
        { time: 186.03, text: "Và giờ người ra đi" },
        { time: 188.95, text: "Trong con tim không nghĩ suy" },
        { time: 192.21, text: "Để lệ hoen đôi mi anh cần chi những hoài nghi" },
        { time: 194.94, text: "Khi em không trở lại (em không trở lại)" },
        { time: 198.19, text: "Chỉ còn lại đôi vai" },
        { time: 201.37, text: "Trong cơn mưa không có ai" },
        { time: 204.46, text: "Lời ngọt ngào bên tai về ngày mai anh đã sai" },
        { time: 207.75, text: "Em không quay về" },
        { time: 210.94, text: "Và giờ người ra đi" },
        { time: 213.85, text: "Trong con tim không nghĩ suy" },
        { time: 216.99, text: "Để lệ hoen đôi mi anh cần chi những hoài nghi" },
        { time: 219.84, text: "Khi em không trở lại" },
        { time: 223.40, text: "Chỉ còn lại đôi vai" },
        { time: 226.31, text: "Trong cơn mưa không có ai" },
        { time: 229.59, text: "Lời ngọt ngào bên tai về ngày mai anh đã sai" },
        { time: 232.75, text: "Em không quay về" },
        { time: 235.66, text: "Vì em không quay về" },
        { time: 236.74, text: "Uh oah" },
        { time: 240.10, text: "Uh oah" }
    ]
},
{
    id: 5,
    title: "Âm Thầm Bên Em",
    artist: "Sơn Tùng M-TP",
    album: "Âm Thầm Bên Em",
    albumArtUrl: "img/am tham ben em.png",
    audioSrc: "audio/am tham ben em.mp3",
    videoBgSrc: "?",
    lyrics: [
        { time: 16.28, text: "Khi bên anh em thấy điều chi?" },
        { time: 19.84, text: "Khi bên anh em thấy điều gì?" },
        { time: 22.59, text: "Nước mắt rơi gần kề làn mi" },
        { time: 28.42, text: "Chẳng còn những giây phút, chẳng còn những ân tình" },
        { time: 35.54, text: "Gió mang em rời xa nơi đây" },
        { time: 43.98, text: "Khi xa anh em nhớ về ai?" },
        { time: 47.45, text: "Khi xa anh em nhớ một người" },
        { time: 49.93, text: "Chắc không phải một người như anh" },
        { time: 55.83, text: "Người từng làm em khóc, người từng khiến em buồn" },
        { time: 63.18, text: "Buông bàn tay, rời xa lặng thinh bước đi" },
        { time: 69.15, text: "Hạt mưa rơi bủa vây trái tim hiu quạnh" },
        { time: 75.85, text: "Ngàn yêu thương vụt tan bỗng xa" },
        { time: 82.77, text: "Người từng nói ở bên cạnh anh mỗi khi anh buồn" },
        { time: 90.42, text: "Cớ sao giờ lời nói kia như gió bay" },
        { time: 96.61, text: "Đừng bỏ rơi bàn tay ấy bơ vơ mà" },
        { time: 103.41, text: "Một mình anh lặng im chốn đây" },
        { time: 109.24, text: "Yêu em âm thầm bên em" },
        { time: 115.06, text: "" },
        { time: 124.76, text: "Yêu thương không còn nơi đây" },
        { time: 126.42, text: "Mang tình buồn theo mây" },
        { time: 128.12, text: "Cơn mơ về" },
        { time: 128.94, text: "Mong manh câu thề" },
        { time: 129.91, text: "Tan trôi qua mau quên đi phút giây" },
        { time: 131.67, text: "Mưa rơi trên đôi mi qua lối vắng" },
        { time: 133.02, text: "Ánh sáng mờ buông lơi làn khói trắng" },
        { time: 134.83, text: "Bóng dáng em, nụ cười ngày hôm qua" },
        { time: 136.34, text: "Kí ức có ngủ quên chìm trong màn sương đắng" },
        { time: 140.18, text: "Anh nhớ giọt nước mắt sâu lắng" },
        { time: 143.16, text: "Anh nhớ nỗi buồn của em ngày không nắng" },
        { time: 145.49, text: "Buông bàn tay, rời xa lặng thinh bước đi" },
        { time: 151.44, text: "Hạt mưa rơi bủa vây trái tim hiu quạnh" },
        { time: 158.39, text: "Ngàn yêu thương vụt tan bỗng xa" },
        { time: 165.17, text: "Người từng nói ở bên cạnh anh mỗi khi anh buồn" },
        { time: 172.78, text: "Cớ sao giờ lời nói kia như gió bay" },
        { time: 180.98, text: "Bàn tay bơ vơ và cầm bông hoa" },
        { time: 187.60, text: "Chờ mong nhớ thương" },
        { time: 192.83, text: "Làm sao quên người ơi, tình anh mãi như hôm nào" },
        { time: 200.17, text: "Vẫn yêu người và vẫn mong em về đây" },
        { time: 206.26, text: "Giọt nước mắt tại sao cứ lăn rơi hoài" },
        { time: 213.36, text: "Ở bên anh chỉ có đớn đau" },
        { time: 220.01, text: "Thì anh xin nhận hết ngàn đau đớn để thấy em cười" },
        { time: 227.64, text: "Dẫu biết giờ người đến không như giấc mơ" },
        { time: 232.52, text: "Yêu em âm thầm bên em" },
        { time: 239.37, text: "Yêu em âm thầm bên em" },
        { time: 247.21, text: "Thì anh xin nhận hết ngàn đau đớn để thấy em cười" },
        { time: 254.95, text: "Dẫu biết giờ người đến không như giấc mơ" },
        { time: 259.98, text: "Yêu em âm thầm bên em" }
    ]
},
{
    id: 6,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 7,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 8,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 9,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 10,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 11,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 12,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 13,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 14,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
},
{
    id: 15,
    title: "?",
    artist: "?",
    album: "?",
    albumArtUrl: "?",
    audioSrc: "?",
    videoBgSrc: "?",
    lyrics: [
        { time: 1000, text: "?" }
    ]
}
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Make sure the page details are hidden
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Hide background video
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
    pauseTrack(); // Pause music when returning home
}

// Function to display the song detail page (still maintained, but not called from song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Show background video

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Empty src if there is no custom video
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Important Changes here ---
        // When a song item is clicked, immediately load & play the song then display the player page
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Jump to the music player page
        });

        // Event listener for hover
        listItem.addEventListener('mouseenter', () => {
            // Only enable background video if we are on the home page
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Add class for body background color
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Hide background video only if we are on home page
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Pause video when mouse leaves
                backgroundVideo.src = ""; // Empty src to prevent playing in the background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Remove body background color class
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>"; // Replace text Content with inner HTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Call the render Lyrics function
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// New function to render lyrics
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Clean the lyrics container
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lyrics are not available for this song.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Store timestamp in data-attribute
        span.classList.add('lyric-line'); // Add class for styling
        lyricsContainer.appendChild(span);
        // Remove the added <br> manually, using CSS display:block or flexbox
        // lyrics Container.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There are no songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error while playing:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Update background video
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}


// Biến này để ngoài sự kiện timeupdate
let lastActiveLine = null;

audioPlayer.addEventListener('timeupdate', () => {
    // --- PHẦN 1: CẬP NHẬT THANH THỜI GIAN (ĐÃ KHÔI PHỤC) ---
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        
        // Cập nhật thanh tím chạy chạy
        if(playerProgressBar) playerProgressBar.style.width = `${progressPercent}%`;
        
        // Cập nhật con số 0:01 / 4:57
        if(playerCurrentTime) playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
    }

    // --- PHẦN 2: LOGIC SCROLL LỜI NHẠC ---
    const currentTime = audioPlayer.currentTime;
    const lyricLines = document.querySelectorAll('.lyric-line');
    let currentLine = null;

    lyricLines.forEach((line, index) => {
        const lineTime = parseFloat(line.getAttribute('data-time'));
        const nextLineTime = lyricLines[index + 1] ? parseFloat(lyricLines[index + 1].getAttribute('data-time')) : Infinity;

        if (currentTime >= lineTime && currentTime < nextLineTime) {
            line.classList.add('highlight');
            currentLine = line;
        } else {
            line.classList.remove('highlight');
        }
    });

    // Chỉ cuộn khi nhảy sang dòng mới để tiết kiệm tài nguyên và mượt hơn
    if (currentLine && currentLine !== lastActiveLine) {
        lastActiveLine = currentLine;

        const container = document.querySelector('.lyrics-container');
        const containerCenter = container.offsetHeight / 2;
        const lineTop = currentLine.offsetTop;
        const lineCenterHeight = currentLine.offsetHeight / 2;

        const scrollTarget = lineTop - containerCenter + lineCenterHeight;

        container.scrollTo({
            top: scrollTarget,
            behavior: 'smooth'
        });
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener for speed slider
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners for navigation buttons
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // From detail page to home
backToHomeBtn.addEventListener('click', showHomePage); // From the landing page to the home page

// Event Listener for the play button from the details page (if you want to use it)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Add log for initialization
    console.log("Songs array length:", songs.length); // Check the number of songs
    console.log("songListElement:", songListElement); // Check if song List Element is found

    renderSongList(); // This is what renders the track list
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // This will be displayed if the songs array is empty
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "No Songs";
        playerTrackArtist.textContent = "Add songs";
        lyricsContainer.innerHTML = "<p>Please add songs from the list.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Set the initial speed
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Update speed display
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Start from the playlist page
    console.log("Initialization complete."); // Log completed initialization
}

init();
document.addEventListener('click', (e) => {
    // Số lượng tia sáng mỗi lần click
    const sparkCount = 10;
    
    for (let i = 0; i < sparkCount; i++) {
        createSpark(e.pageX, e.pageY);
    }
});

function createSpark(x, y) {
    const spark = document.createElement('div');
    spark.className = 'sparkler';
    document.body.appendChild(spark);

    // Kích thước ngẫu nhiên cho tia sáng
    const size = Math.random() * 5 + 2;
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;

    // Vị trí xuất hiện ban đầu
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;

    // Hướng bay ngẫu nhiên (360 độ)
    const destinationX = (Math.random() - 0.5) * 200;
    const destinationY = (Math.random() - 0.5) * 200;
    
    // Màu sắc ngẫu nhiên (tông tím/neon để hợp với app của bạn)
    const colors = ['#8b5cf6', '#d8b4fe', '#ffffff', '#a78bfa'];
    spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Chạy animation bằng JS để xử lý tọa độ ngẫu nhiên
    const animation = spark.animate([
        {
            transform: `translate(-50%, -50%) translate(0, 0)`,
            opacity: 1
        },
        {
            transform: `translate(-50%, -50%) translate(${destinationX}px, ${destinationY}px)`,
            opacity: 0
        }
    ], {
        duration: Math.random() * 500 + 500, // Thời gian bay 0.5s - 1s
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: Math.random() * 100
    });

    // Xóa phần tử sau khi diễn xong
    animation.onfinish = () => spark.remove();
}
document.addEventListener('keydown', (e) => {

    switch (e.code) {


        case 'ArrowRight': // Mũi tên phải: Tua đi 10s
            audioPlayer.currentTime += 10;
            break;

        case 'ArrowLeft': // Mũi tên trái: Tua lại 10s
            audioPlayer.currentTime -= 10;
            break;

        case 'KeyM': // Phím M: Tắt/Bật âm thanh (Mute)
            audioPlayer.muted = !audioPlayer.muted;
            // Cập nhật icon volume nếu cần
            break;

        case 'KeyL': // Phím L: Bật/Tắt lặp bài (Loop)
            audioPlayer.loop = !audioPlayer.loop;
            // Hiển thị thông báo nhỏ hoặc đổi màu nút Loop
            break;

        case 'ArrowUp': // Mũi tên lên: Tăng âm lượng
            e.preventDefault();
            audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1);
            break;

        case 'ArrowDown': // Mũi tên xuống: Giảm âm lượng
            e.preventDefault();
            audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1);
            break;

        case 'KeyN': // Phím N: Bài tiếp theo (Next)
            nextBtn.click();
            break;

        case 'KeyP': // Phím P: Bài trước đó (Previous)
            prevBtn.click();
            break;
    }
});
songSearch.addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase().trim();
    const songs = document.querySelectorAll('#songList li'); // Lấy tất cả các "viên thuốc" bài hát

    songs.forEach(song => {
        // Lấy text của h2 (Tên bài) và p (Nghệ sĩ)
        // .innerText sẽ lấy sạch chữ bên trong thẻ đó
        const title = song.innerText.toLowerCase();
        const artist = song.querySelector('p') ? song.querySelector('p').innerText.toLowerCase() : "";

        // Kiểm tra: Nếu từ khóa nằm trong Tên bài HOẶC nằm trong Tên nghệ sĩ
        if (title.includes(term) || artist.includes(term)) {
            song.style.display = 'flex'; // Hiện (vì bạn dùng flex cho li)
        } else {
            song.style.display = 'none'; // Ẩn
        }
    });
});