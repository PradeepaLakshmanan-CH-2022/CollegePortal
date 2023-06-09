import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.component.html',
  styleUrls: ['./collegelist.component.css']
})
export class CollegelistComponent {

  @Input() public parentData:any; 
  @Output() public ReturnColleges = new EventEmitter(); 

  public Colleges:any[] = []; 
  private getCollegesByCity(city: string): string[] { 
    if (city === 'Chennai') { 
      return ['SRM University', 'Chennai Institute of Technology', 'Sathyabama University']; 

    } else if (city === 'Pune') { 
  return ['Modern College of Arts, Science and Commerce', 
       'Dr. D. Y. Patil Vidyapeeth, Pune','Maharashtra Institute of Technology']; 

    }  

   else if (city === 'Andhra Pradesh') { 
      return['JNTUA COLLEGE OF ENGINEERING','Adikavi Nannaya University','Jawaharlal Nehru Technological University']  
    } 

    else { 
      return []; 
    } 

  } 

  SendColleges(City: any){ 
    this.Colleges = this.getCollegesByCity(City); 
  this.ReturnColleges.emit(this.Colleges);  

  } 

  refresh(){ 
    location.reload(); 

  } 

} 

 

 

