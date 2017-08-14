import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TipoEvento } from '../models';


@Injectable()
export class TipoEventoService {

  private url: string = "http://localhost:8000/tipoevento/";

  constructor(private http: Http) { }

  getTipoEventos(){
    return this.http.get(this.url)
      .map(res => <TipoEvento[]>res.json());
  }

  getTipoEvento(id){
    return this.http.get(this.getTipoEventoUrl(id))
      .map(res => <TipoEvento>res.json());
  }

  addTipoEvento(TipoEvento : TipoEvento){
    return this.http.post(this.url, JSON.stringify(TipoEvento))
      .map(res => res.json());
  }

  updateTipoEvento(TipoEvento : TipoEvento){
    return this.http.put(this.getTipoEventoUrl(TipoEvento.id_tipo_evento), JSON.stringify(TipoEvento))
      .map(res => res.json());
  }

  deleteTipoEvento(id){
    return this.http.delete(this.getTipoEventoUrl(id))
      .map(res => res.json());
  }

  private getTipoEventoUrl(id){
    return this.url + id;
  }
}
