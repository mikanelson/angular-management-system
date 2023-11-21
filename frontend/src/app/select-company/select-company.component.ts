import { Component } from '@angular/core';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.css'],
})
export class SelectCompanyComponent {
  companies = ['chik-fil-a', 'wal-mart', 'fedex'];
  handleSelectCompany = (company: string) => {
    console.log(company);
  };
}
