
import flatpickr from 'flatpickr'
import { Russian } from "flatpickr/dist/l10n/ru.js"

export const Booking=()=>{
    var getNormalMonth = function (month) {
		month = month + 1;
		if (month < 10) {
			month = '0' + month;
		}
		return month;
	};
var diffDays = function (date1, date2) {
		return Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
	};
	var declOfNum = function declOfNum(number, titles) {
		var cases = [2, 0, 1, 1, 1, 2];
		return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
	};

	$('body').on('click', '.reservation-dates .reservation-dates-date', function (e) {
		e.preventDefault();
	});

	$('body').on('click', '.reservation-dates.active', function (e) {
		$(this).addClass('active-toggle');
		$('.swiper').css('pointerEvents','none')
	});

	$('body').on('click', '.reservation-dates.active-toggle', function (e) {
		$(this).removeClass('active-toggle');
		$(this).removeClass('active');
		reservationDatesCalendar.close();		
	});

	$('body').on('click', '.reservation-details .reservation-details-title', function (e) {
		if (window.innerWidth < 768) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$('.reservation-details .reservation-details-data').removeClass('active');				
			} else {
				$(this).addClass('active');
				$('.reservation-details .reservation-details-data').addClass('active');
				
			}
		}
	});
var setReservationDates = function (selectedDates, dateStr, instance) {
		var startDateDay = selectedDates[0];
		if (selectedDates.length === 2) {
			var endDateDay = selectedDates[1];
			$('.reservation-dates-date_start').val(startDateDay.getDate() + '.' + getNormalMonth(startDateDay.getMonth()) + '.' + startDateDay.getFullYear());
			$('.reservation-dates-date_end').val(endDateDay.getDate() + '.' + getNormalMonth(endDateDay.getMonth()) + '.' + endDateDay.getFullYear());
			var date = startDateDay.getDate() + '.' + getNormalMonth(startDateDay.getMonth()) + (startDateDay.getFullYear() !== endDateDay.getFullYear() ? '.' + startDateDay.getFullYear() : '')
				+ ' <span> - </span> '
				+ endDateDay.getDate() + '.' + getNormalMonth(endDateDay.getMonth()) + '.' + endDateDay.getFullYear();
			var title = startDateDay.getDate() + '.' + getNormalMonth(startDateDay.getMonth()) + (startDateDay.getFullYear() !== endDateDay.getFullYear() ? '.' + startDateDay.getFullYear() : '')
				+ ' - '
				+ endDateDay.getDate() + '.' + getNormalMonth(endDateDay.getMonth()) + '.' + endDateDay.getFullYear();
			$('.reservation-dates .reservation-dates-date').attr('title', title).html(date);
			$('.reservation-dates-footer').html(diffDays(startDateDay, endDateDay) + ' ' + declOfNum(diffDays(startDateDay, endDateDay), ['ночь', 'ночи', 'ночей']));

			instance.close();
		} else {
			$('.reservation-dates-footer').html('Выберите даты проживания');
			if (selectedDates.length === 1) {
				$('.reservation-dates .reservation-dates-date').attr('title', '').html(startDateDay.getDate() + '.' + getNormalMonth(startDateDay.getMonth()) + '.' + startDateDay.getFullYear());
			} else {
				$('.reservation-dates .reservation-dates-date').attr('title', 'Выберите даты проживания').html('Выберите даты проживания');
			}
		}
	};
Date.prototype.yyyymmdd = function () {
		var mm = this.getMonth() + 1; // getMonth() is zero-based
		var dd = this.getDate();        
        
		return [this.getFullYear(),
			(mm > 9 ? '' : '0') + mm,
			(dd > 9 ? '' : '0') + dd
		].join('-');
        
	};
    var reservationDatesCalendar = document.getElementsByClassName("reservation-dates").flatpickr({
    locale: Russian,
			showMonths: 2,
			mode: "range",
			defaultDate: [new Date(), new Date().setDate(new Date().getDate() + 1)],
			minDate: new Date().yyyymmdd(),
			dateFormat: "d.m.Y",
			closeOnSelect: false,
			appendTo:document.querySelectorAll('.booking__form-group')[1],
			static:true,
			onChange: function (selectedDates, dateStr, instance) {
				setReservationDates(selectedDates, dateStr, instance);
			},
			onClose: function (selectedDates, dateStr, instance) {
				$('.reservation-dates.active-toggle').removeClass('active-toggle');			
				$('.swiper').css('pointerEvents','all')	
			},
			onReady(selectedDates, dateStr, instance) {
				instance.calendarContainer.classList.add("reservation-dates-calendar");
				$(instance.calendarContainer).append('<div class="reservation-dates-footer">Выберите даты проживания</div>');
				setReservationDates(selectedDates, dateStr, instance);
				
				if (window.innerWidth < 768) {					
					instance.set('showMonths', 1);
				}
				$(window).on('resize',function(){
					if (window.innerWidth < 768) {					
					instance.set('showMonths', 1);
				}else{
					instance.set('showMonths', 2);
				}
				})
			}
    })		


		if($('.booking__form-group').length>0){
			$('[data-toggle]').on('click',function(){
				if($(this).hasClass('active')){
					$('[data-toggle]').removeClass('active')
					$('[data-toggle]').next().fadeOut(100)
					$(this).removeClass('active')
					$(this).next().fadeOut(100)
					$('.swiper').css('pointerEvents','all')	
				}else{
					$('[data-toggle]').removeClass('active')
					$('[data-toggle]').next().fadeOut(100)
					$(this).addClass('active')
					$(this).next().fadeIn(100)
					$('.swiper').css('pointerEvents','none')	
				}
			})
			$(document,'body').on('mouseup',(e)=>{
				if(!e.target.closest('.width-drop')){
					$('[data-toggle]').removeClass('active')
					$('[data-toggle]').next().fadeOut(100)
					$('.swiper').css('pointerEvents','all')	
				}
			})

			$('.booking__hotel-name').on('click',function(){
				let text = $(this).html()
				let span = $(this).parents('.booking__form-group').find('.span-value')
				span.html(text)
				$(this).parents('.booking__form-group').find('[data-toggle]').trigger('click')
				$(this).parents('.booking__form-group').find('.booking__hotel-name').removeClass('actived')
				$(this).addClass('actived')
			})

			$('.booking__person-button').each(function(){
				$(this).on('click',function(){
					let math = $(this).data('math')
					let min = parseInt($(this).parents('.booking__person-quantity').find('input').data('min'))
					let val = $(this).parents('.booking__person-quantity').find('input').val()
					let intValue = parseInt(val)
					if(math==='add'){
						$(this).parents('.booking__person-quantity').find('input').val(intValue+1)
					}
					if(math==='remove' && intValue>min){
						$(this).parents('.booking__person-quantity').find('input').val(intValue-1)
						$(this).removeClass('disable')
					}

					if(parseInt($(this).parents('.booking__person-quantity').find('input').val())>min){
						$(this).parents('.booking__person-quantity').find('[data-math="remove"]').removeClass('disable')
					}else{
						$(this).parents('.booking__person-quantity').find('[data-math="remove"]').addClass('disable')
					}
					$(this).parents('.adult').find('.span-value').html(getName($('#adult').val(),min) + getChildren($('#children').val()))
					
				})
			})
		}

		function getName(v,m){
			if(parseInt(v)>m){
				return v + ' взрослых'
			}else{
				return v + ' взрослый'
			}
		}

		function getChildren(v){
			switch(parseInt(v)){
				case 0 :
					return ''
				case 1 :
					return ' ' + v + ' ребёнок'
				default : return ' ' + v + ' детей'					
			}
		}

}

