import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { DateValidationService } from '../services/date-validation.service';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.scss']
})
export class FechaComponent implements OnInit {
  @Input() fecha: Date;
  @Output() fechaChange = new EventEmitter<Date>();

  model: NgbDateStruct;

  constructor(private calendar: NgbCalendar, private dateValidationService: DateValidationService) { }

  ngOnInit(): void {
    if (this.fecha) {
      this.model = {
        year: this.fecha.getFullYear(),
        month: this.fecha.getMonth() + 1,
        day: this.fecha.getDate()
      };
    } else {
      this.model = this.calendar.getToday();
    }
  }

  onDateSelect(date: NgbDateStruct): void {
    const selectedDate = new Date(date.year, date.month - 1, date.day);
    if (this.dateValidationService.isValidDate(selectedDate)) {
      this.fechaChange.emit(selectedDate);
    } else {
      // Handle invalid date selection
      console.error('Invalid date selection');
    }
  }
}