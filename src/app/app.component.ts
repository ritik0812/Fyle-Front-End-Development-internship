import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public pageSize = 10;
  public totalPages = 100;
  public currentPage = 1;
  public src = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }

  onPageChange(event: any) {
    console.log('Page changed:', event.pageIndex + 1);
    this.currentPage = event.pageIndex + 1;
  }

  getPageArray(): number[] {
    return Array.from({ length: Math.ceil(this.totalPages / this.pageSize) }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    console.log('Go to page:', page);
  }
}
