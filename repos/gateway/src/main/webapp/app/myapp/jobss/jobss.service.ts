import { Injectable } from '@angular/core';
import { IJobss } from './jobss.model';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { HttpClient } from '@angular/common/http';
import { getAllJSDocTags } from 'typescript';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class JobssService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/jobs', 'employee');
  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}
  getAll(): Observable<IJobss[]> {
    return this.http.get<IJobss[]>(this.resourceUrl);
  }
}
