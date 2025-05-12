import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { interval, Subscription, switchMap, of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

interface NumberData {
  numOne: number;
  numTwo: number;
  numThree: number;
  media: number;
  median: number;
  status: string;
}

@Component({
  selector: 'app-number-list',
  standalone: true,
  imports: [HttpClientModule, MatCardModule, AsyncPipe, CommonModule, MatTableModule],
  templateUrl: './number-list.component.html',
  styleUrls: ['./number-list.component.css']
})
export class NumberListComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  data$ = this.http.get<NumberData[]>('http://localhost:8000/api/all/');
  private subscription: Subscription | undefined;
  displayedColumns: string[] = ['numOne', 'numTwo', 'numThree', 'media', 'median', 'status'];

  ngOnInit(): void {
    this.subscription = interval(5000).pipe(
      switchMap(() => this.http.get<NumberData[]>('http://localhost:8000/api/all/'))
    ).subscribe(data => {
      this.data$ = of(data);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
