#!/usr/bin/env python
# coding=utf-8

import os
from setuptools import setup, find_packages
from flaskapi import version

try:
    import multiprocessing
except ImportError:
    pass


def read(fname):
    try:
        return open(os.path.join(os.path.dirname(__file__), fname)).read()
    except IOError:
        return ""

setup(
    name="flask-api",
    version=version,
    packages=find_packages(),
    test_suite="tests",
    tests_require=["pytest"],

    # metadata for upload to PyPI
    author="Yu Yuan",
    author_email="yuyuan_v@163.com",
    url="https://github.com/Scofieldsu/flask-api",
    description="flask jsonrpc api test",
    long_description=read('README.md'),

    #requirements
    install_requires = [
       'json-rpc>=1.10.3',
       'Flask-Cors>=3.0.2'
    ],
    # Full list:
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Console",
        "License :: OSI Approved :: MIT License",
        "Natural Language :: English",
        "Operating System :: OS Independent",
        "Programming Language :: Python :: 2.6",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: Implementation :: PyPy",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    license="MIT",
    zip_safe=False
)