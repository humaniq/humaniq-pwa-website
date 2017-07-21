import React from 'react';

export function universalChildrenOnly(children) {
  return (Array.isArray (children) && children.length === 1)
    ? children[0]
    : React.Children.only (children);
}