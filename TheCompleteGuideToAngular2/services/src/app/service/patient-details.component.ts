import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from '../models';

@Component({
  moduleId: module.id,
  selector: 'app-patient-details',
  templateUrl: 'patient-details.component.html',
  providers: [PatientService]
})
export class PatientDetailsComponent implements OnInit {
  private patients: Patient[] = [];
  private errorMessage: string;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getAll()
                       .subscribe(
                         p => {
                           //console.log(p);
                           this.patients = p
                         },
                         e => this.errorMessage = e
                       );

  }

}
