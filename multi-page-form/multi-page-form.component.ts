import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-page-form',
  templateUrl: './multi-page-form.component.html',
  styleUrls: ['./multi-page-form.component.css']
})
export class MultiPageFormComponent implements OnInit {

  // progressName = document.querySelectorAll(".step p");
  // progressIndex = document.querySelectorAll(".step .bullet");
  // progressChecked = document.querySelectorAll(".step .check");
  // maxPages = 4;
  // currentPage = 1;
  constructor() { }

  ngOnInit() {
  }

  onNext0Click(basicInfoPage,p1,bullet1,check1){
    basicInfoPage.style.marginLeft = '-25%';
    bullet1.classList.add("active");
    // check1.classList.add("active");
    p1.classList.add("active");
  }

  onPrev1Click(basicInfoPage,p1,bullet1,check1){
    basicInfoPage.style.marginLeft = '0%';
    bullet1.classList.remove("active");
    // check1.classList.remove("active");
    p1.classList.remove("active");
  }

  onNext1Click(basicInfoPage,p2,bullet2,check2){
    basicInfoPage.style.marginLeft = '-50%';
    bullet2.classList.add("active");
    // check2.classList.add("active");
    p2.classList.add("active");
  }

  onPrev2Click(basicInfoPage,p2,bullet2,check2){
    basicInfoPage.style.marginLeft = '-25%';
    bullet2.classList.remove("active");
    // check2.classList.remove("active");
    p2.classList.remove("active");
  }

  onNext2Click(basicInfoPage,p3,bullet3,check3){
    basicInfoPage.style.marginLeft = '-75%';
    bullet3.classList.add("active");
    // check3.classList.add("active");
    p3.classList.add("active");
  }

  onPrev3Click(basicInfoPage,p3,bullet3,check3){
    basicInfoPage.style.marginLeft = '-50%';
    bullet3.classList.remove("active");
    // check3.classList.remove("active");
    p3.classList.remove("active");
  }

  onSubmitClick(basicInfoPage,p4,bullet4,check4){
    bullet4.classList.add("active");
    // check4.classList.add("active");
    p4.classList.add("active");
    setTimeout(() => {
      alert("thanks for submit")
    }, 800);
  }
}
