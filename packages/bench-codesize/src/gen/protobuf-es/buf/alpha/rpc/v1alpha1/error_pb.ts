// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v0.0.8 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/rpc/v1alpha1/error.proto (package buf.alpha.rpc.v1alpha1, syntax proto3)
/* eslint-disable */

import {proto3} from "@bufbuild/protobuf";

/**
 * Well defined error codes specified as part of the RPC API.
 *
 * @generated from enum buf.alpha.rpc.v1alpha1.ErrorCode
 */
export enum ErrorCode {
  /**
   * @generated from enum value: ERROR_CODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ERROR_CODE_CANCELLED = 1;
   */
  CANCELLED = 1,

  /**
   * @generated from enum value: ERROR_CODE_UNKNOWN = 2;
   */
  UNKNOWN = 2,

  /**
   * @generated from enum value: ERROR_CODE_INVALID_ARGUMENT = 3;
   */
  INVALID_ARGUMENT = 3,

  /**
   * @generated from enum value: ERROR_CODE_DEADLINE_EXCEEDED = 4;
   */
  DEADLINE_EXCEEDED = 4,

  /**
   * @generated from enum value: ERROR_CODE_NOT_FOUND = 5;
   */
  NOT_FOUND = 5,

  /**
   * @generated from enum value: ERROR_CODE_ALREADY_EXISTS = 6;
   */
  ALREADY_EXISTS = 6,

  /**
   * @generated from enum value: ERROR_CODE_PERMISSION_DENIED = 7;
   */
  PERMISSION_DENIED = 7,

  /**
   * @generated from enum value: ERROR_CODE_RESOURCE_EXHAUSTED = 8;
   */
  RESOURCE_EXHAUSTED = 8,

  /**
   * @generated from enum value: ERROR_CODE_FAILED_PRECONDITION = 9;
   */
  FAILED_PRECONDITION = 9,

  /**
   * @generated from enum value: ERROR_CODE_ABORTED = 10;
   */
  ABORTED = 10,

  /**
   * @generated from enum value: ERROR_CODE_OUT_OF_RANGE = 11;
   */
  OUT_OF_RANGE = 11,

  /**
   * @generated from enum value: ERROR_CODE_UNIMPLEMENTED = 12;
   */
  UNIMPLEMENTED = 12,

  /**
   * @generated from enum value: ERROR_CODE_INTERNAL = 13;
   */
  INTERNAL = 13,

  /**
   * @generated from enum value: ERROR_CODE_UNAVAILABLE = 14;
   */
  UNAVAILABLE = 14,

  /**
   * @generated from enum value: ERROR_CODE_DATA_LOSS = 15;
   */
  DATA_LOSS = 15,

  /**
   * @generated from enum value: ERROR_CODE_UNAUTHENTICATED = 16;
   */
  UNAUTHENTICATED = 16,
}
// Retrieve enum metadata with: proto3.getEnumType(ErrorCode)
proto3.util.setEnumType(ErrorCode, "buf.alpha.rpc.v1alpha1.ErrorCode", [
  { no: 0, name: "ERROR_CODE_UNSPECIFIED" },
  { no: 1, name: "ERROR_CODE_CANCELLED" },
  { no: 2, name: "ERROR_CODE_UNKNOWN" },
  { no: 3, name: "ERROR_CODE_INVALID_ARGUMENT" },
  { no: 4, name: "ERROR_CODE_DEADLINE_EXCEEDED" },
  { no: 5, name: "ERROR_CODE_NOT_FOUND" },
  { no: 6, name: "ERROR_CODE_ALREADY_EXISTS" },
  { no: 7, name: "ERROR_CODE_PERMISSION_DENIED" },
  { no: 8, name: "ERROR_CODE_RESOURCE_EXHAUSTED" },
  { no: 9, name: "ERROR_CODE_FAILED_PRECONDITION" },
  { no: 10, name: "ERROR_CODE_ABORTED" },
  { no: 11, name: "ERROR_CODE_OUT_OF_RANGE" },
  { no: 12, name: "ERROR_CODE_UNIMPLEMENTED" },
  { no: 13, name: "ERROR_CODE_INTERNAL" },
  { no: 14, name: "ERROR_CODE_UNAVAILABLE" },
  { no: 15, name: "ERROR_CODE_DATA_LOSS" },
  { no: 16, name: "ERROR_CODE_UNAUTHENTICATED" },
]);

