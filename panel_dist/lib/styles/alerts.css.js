const css = `
.bk.alert {
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    /* Don't set margin because that will not render correctly! */
    /* margin-bottom: 1rem; */
    margin-top: 15px;
    margin-bottom: 15px;
}
.bk.alert a {
    color: rgb(11, 46, 19); /* #002752; */
    font-weight: 700;
    text-decoration: rgb(11, 46, 19);
    text-decoration-color: rgb(11, 46, 19);
    text-decoration-line: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
  }
.bk.alert a:hover {
    color: rgb(11, 46, 19);
    font-weight: 700;
    text-decoration: underline;
}

.bk.alert-primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.bk.alert-primary hr {
    border-top-color: #9fcdff;
}

.bk.alert-secondary {
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  }
.bk.alert-secondary hr {
    border-top-color: #c8cbcf;
}

.bk.alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

.bk.alert-success hr {
    border-top-color: #b1dfbb;
}

.bk.alert-info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }
.bk.alert-info hr {
    border-top-color: #abdde5;
}

.bk.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }

.bk.alert-warning hr {
    border-top-color: #ffe8a1;
}

.bk.alert-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
}
.bk.alert-danger hr {
    border-top-color: #f1b0b7;
}

.bk.alert-light {
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
  }
.bk.alert-light hr {
    border-top-color: #ececf6;
}

.bk.alert-dark {
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;
  }
.bk.alert-dark hr {
    border-top-color: #b9bbbe;
}


/* adjfæl */

.bk.alert-primary a {
    color: #002752;
}

.bk.alert-secondary a {
    color: #202326;
}


.bk.alert-success a {
    color: #0b2e13;
}


.bk.alert-info a {
    color: #062c33;
}


.bk.alert-warning a {
    color: #533f03;
}


.bk.alert-danger a {
    color: #491217;
}

.bk.alert-light a {
    color: #686868;
}

.bk.alert-dark a {
    color: #040505;
}`;
export default css;
