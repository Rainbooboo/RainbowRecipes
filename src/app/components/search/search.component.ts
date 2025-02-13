import { Component, EventEmitter, Output } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  query!: string;
  searchForm!: FormGroup;
  @Output() searchResults = new EventEmitter<any[]>(); // ✅ Sends data to parent


  constructor(private commonService: CommonService, private fb:FormBuilder) {

  }
  ngOnInit(): void {
    this.initform();
    this.search();
  }

  initform(){
    this.searchForm = this.fb.group({
      query: ['']
    })
  }


  search() {
    this.query = this.searchForm.get('query')?.value
    // console.log(this.query)
    this.commonService.searchForRecipe(this.query).subscribe({
      next: (res) => {
        // console.log(res);
        this.searchResults.emit(res.results);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
}
