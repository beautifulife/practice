var Handler = {
    setBackGroundColor: function (self) {
        document.querySelector('body').style.backgroundColor = self;
    },
    setColor: function (self) {
        document.querySelector('body').style.color = self;
    },
    nightDayHandler: function (self) {
        if (self.value === 'night') {
            Handler.setBackGroundColor('black');
            Handler.setColor('white');
            self.value = 'day';

            var link = document.querySelectorAll('a');
            var i = 0;
            while (i < link.length) {
                link[i].style.color = 'white';
                i = i + 1;
            }
        } else {
            Handler.setBackGroundColor('white');
            Handler.setColor('black');
            self.value = 'night';

            var link = document.querySelectorAll('a');
            var i = 0;
            while (i < link.length) {
                link[i].style.color = 'black';
                i = i + 1;
            }
        }
    }
}