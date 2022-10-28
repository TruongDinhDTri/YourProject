import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { Observable } from 'rxjs';
import { IDepartment } from './departments.model';

@Injectable({
  providedIn: 'root',
})
export class DepartmentServiceService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/departments', 'employee');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}
  getAll(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this.resourceUrl);
  }
}
