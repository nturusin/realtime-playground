# Get variables from ENV
PYPI_USER := ${PYPI_USER}
PYPI_PASSWORD := ${PYPI_PASSWORD}

# If .env file is found, assign variables from this source (overriding existing)
ifneq (,$(wildcard .env))
    $(info FOUND .env File.)
    include .env
endif

$(if $(PYPI_PASSWORD),,$(warning PYPI_PASSWORD is not set, use .env file or environment variables))
$(if $(PYPI_USER),,$(warning PYPI_USER is not set, use .env file or environment variables))

NEXUS_URL="https://$(PYPI_USER):$(PYPI_PASSWORD)@nexus.dev.anna.money/repository/pypi/simple"


install:
	pip install -r agent/requirements.txt --extra-index-url $(NEXUS_URL)


