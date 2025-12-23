{
  pkgs, # pkgs 的具体内容是外部传入的，LSP 无法直接分析
  lib,
  config,
  ...
}:
{
  foo = with pkgs; [ # 但提供包名补全又依赖 pkgs

  ];
}