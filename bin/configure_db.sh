#!bin/bash

export PGPASSWORD='pwd'

echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb;
createdb -U node_user dragonstackdb;

psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

echo "Dragonstackdb configured"