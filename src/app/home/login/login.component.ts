import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario= '';
  senha= '';

  constructor(private auth:AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.auth.autenticar(this.usuario,this.senha).subscribe(
      ()=>{
        this.router.navigate(['animais']);
      }, (error) =>{
        alert('Erro no login!');
        console.log(error);
      })
  };
}
