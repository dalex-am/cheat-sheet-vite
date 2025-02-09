import { MarkerType, type Edge, type EdgeTypes } from "@xyflow/react";

const markerEnd = {
  type:  MarkerType.Arrow,
  // color?: string;
  // width?: number;
  // height?: number;
  // markerUnits?: string;
  // orient?: string;
  // strokeWidth?: number;
}

export const initialEdges = [
  { id: "a->c", source: "a", target: "c", animated: true, markerEnd },
  { id: "b->d", source: "b", target: "d", label: "123", markerEnd },
  { id: "c->d", source: "c", target: "d", animated: true, markerEnd },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
