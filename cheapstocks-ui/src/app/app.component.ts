import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx"
import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  private http: HttpClient;
  ngOnInit(){
    
  }
  title = 'app';
}

