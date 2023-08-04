#!/bin/bash
# sends a DELETE request
curl -X DELETE -sSL "$1"; [ "$(curl -X DELETE -sSL "$1")" = "DELETE method accepted" ] && echo "Test Passed: DELETE method accepted" || echo "Test Failed: Response does not match expected output"
