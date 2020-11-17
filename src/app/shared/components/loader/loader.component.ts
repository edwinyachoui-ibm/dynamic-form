import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoaderService} from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  isLoading = false;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.loaderService.onChange.subscribe(isLoading => {
      this.isLoading = isLoading;
      this.changeDetectorRef.detectChanges();
    });
  }

}
