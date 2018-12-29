.PHONY: test

install:
	docker-compose -f docker-compose.test.yml run service_stats_test npm i

lint:
	docker-compose run app npm run lint

test:
	docker-compose -f docker-compose.test.yml run service_stats_test npm test

test-watch:
	docker-compose -f docker-compose.test.yml run service_stats_test npm test -- -w

clean:
	docker-compose -f docker-compose.test.yml rm
