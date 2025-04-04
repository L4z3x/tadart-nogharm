import data from './data.json';
import { Data, Member, Association } from './types';

// Use a safer type assertion approach
const typedData = data as unknown as Data;

export function getData(): Data {
  return typedData;
}

export function getMembers(): Member[] {
  return typedData.members;
}

export function getAssociations(): Association[] {
  return typedData.associations;
}

export function getAssociationById(id: string): Association | undefined {
  return typedData.associations.find(association => association.id === id);
}

export function getMembersByAssociationId(associationId: string): Member[] {
  return typedData.members.filter(member => member.associationId === associationId);
}

export function getMemberById(id: string): Member | undefined {
  return typedData.members.find(member => member.id === id);
} 