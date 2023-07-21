const fs = require('fs');
module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: {
          ca: '-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUMTdCrVlALkddnAmoyJtWftU50E4wDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvZGI2Mjk4ZGEtYzY0OS00NGJlLTk0NTEtYmU0OTEzZGU2
NjU4IFByb2plY3QgQ0EwHhcNMjMwNzIwMTMzNjA1WhcNMzMwNzE3MTMzNjA1WjA6
MTgwNgYDVQQDDC9kYjYyOThkYS1jNjQ5LTQ0YmUtOTQ1MS1iZTQ5MTNkZTY2NTgg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAN012fG7
6GBYrS34yKgerehCi+Ova4wjfTwDPawXFw9RcyWp/z3PyAa0uVJb2+yJF+t4x8qm
LovSM0cAJUJLJGRhm8+Kmt2ndfa+01eP+gEUMuyo056hWrWtDF6wSv7b16DTwqD4
qGxvLparHDvoTp6cIrcWvNC7ybQwvQjcfcM/m4pnRKO2i5yKpzXdPLBo8H6kCK2W
qmqRql+z/La8fqXCYdUcKI2nowOIJEjIxPBbq/T7xgl+r6cWj6G8S1d3Zb9/geqH
xqlIocDwwcCicZdk+ZZs4nGlLgCk3yANsL1Y6nZo1eInVsyAV5d3/y/co4+ly65E
eEwbfxG7Z+SpNzBZKNJ/ngz0GyR/1riWQeDindTDTdLuoZwjKOf6Ub+pxcYJjwEm
v1Q5wM5wRsVOSRxyklg6Tc0o/WhqEhWIfkQG4/v/PzQJ454n/+SwX5TmZEDQI7pD
JRe0l60DO/Taw/Kpcp7jlMwc/vhDTZaQ1j9PWd36ny7Bbcl+2LdKrIovHQIDAQAB
oz8wPTAdBgNVHQ4EFgQU9VColEVHV/eawIJCsytAaUnN9KowDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAJ1w6iXwE8jWKQFv
zAM26ujpC5pCMuet5Hoxn3Bin3AZpXYsCr0CyQf08SnKsTUDu4NYnx0H8IGvFGMz
Jc5RHWMaWymuF1vd4icieDJNuUE2R5OVaWJAMkIF6uv7F+/HWTD4jYxaMdoJS5Z3
ADnkCgM0naUNufVtESYjApRvuhKeJRU9Yv977APR27BohTjKrD/KQQ8ewE4A1+oR
UonhKI8mGh1yW1KS+hc+d5G1r8sZbpt8OymiBpnij4yVmNr4Iy565qGKIhD3J8+x
EaEUzRpeVDmtbB4LM3PE39IParG/HH6z/cIzzpfMZGqOxEl5T/U2K1kfA5UQYb+i
XJ5cF7Ou5tnd9u6E4wjGyhbtWuoRZViCd2PIurIJdRqaoVZ9qyB38HdGa6S5Gfle
PL4+7OMbfDqjxpmHXnLGrpHACBDcPny/1KoGJRs+/Gj8inDuUmCkOJJFE0kQo9AL
6txPDf1Ko4c80mu3XqYz90kCPIetikdDAyJrG9zCyas8ncUPTg==
-----END CERTIFICATE-----',
        },
      },
      debug: false,
    },
  });
