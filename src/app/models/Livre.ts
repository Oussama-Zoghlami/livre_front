export class Livre {
    idLivre?: number;
    titre?: string;
    autheur?: string;
    datePub?: Date;
    numISBN?: number;
    categorie?: string;
  
    constructor(
      idLivre?: number,
      titre?: string,
      autheur?: string,
      datePub?: Date,
      numISBN?: number,
      categorie?: string
    ) {
      this.idLivre = idLivre;
      this.titre = titre;
      this.autheur = autheur;
      this.datePub = datePub;
      this.numISBN = numISBN;
      this.categorie = categorie;
    }
  }
  