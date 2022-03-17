CREATE MIGRATION m1dg6jw6y2dma6mmlj52ha2wkserwvzhvj64v6gsm5y2ugl2jd26da
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY email -> std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
