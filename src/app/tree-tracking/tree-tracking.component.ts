import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TreeNode} from "../../interfaces/tree-node";

@Component({
  selector: 'app-tree-tracking',
  templateUrl: './tree-tracking.component.html',
  styleUrls: ['./tree-tracking.component.css']
})
export class TreeTrackingComponent implements OnInit {
  @ViewChild('GraphId', { static: true }) svgElement: ElementRef<SVGElement>;
  public data =
    {
      'ROW': 0,
      'COLUMN': 0,
      'X': 0,
      'Y': 0,
      'H': 0,
      'W': 0,
      'CONTENT': `
        <div style="height: 100px; width: 300px; margin: 5px; padding: 5px">
            <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
            <span style="font-size: 14px; font-weight: normal; margin-top: -2px">N° Serie : 120002563</span>
        </div>
          `,
      'SUB': [
        {
          'ROW': 0,
          'COLUMN': 0,
          'X': 0,
          'Y': 0,
          'H': 0,
          'W': 0,
          'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Production</td>
        <td colspan="2" style="text-align: right">Reception</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Rachid el yazami</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AI-PDR-LOG</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
          'SUB': [
            {
              'ROW': 0,
              'COLUMN': 0,
              'X': 0,
              'Y': 0,
              'H': 0,
              'W': 0,
              'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Consommation</td>
        <td colspan="2" style="text-align: right">Expédition</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Ismael saadoune</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AI-PDR-LOG</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
              `,
              'SUB': [
                {
                  'ROW': 0,
                  'COLUMN': 0,
                  'X': 0,
                  'Y': 0,
                  'H': 0,
                  'W': 0,
                  'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Production</td>
        <td colspan="2" style="text-align: right">Reception</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Khalil Mostaghfir</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AG-CASA-PDR</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
                  'SUB': [
                    {
                      'ROW': 0,
                      'COLUMN': 0,
                      'X': 0,
                      'Y': 0,
                      'H': 0,
                      'W': 0,
                      'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Consommation</td>
        <td colspan="2" style="text-align: right">Sortie BT</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Ibn al-Haytham</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AG-CASA-PDR</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">BT : 12500</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
                      'SUB': []
                    },
                    {
                      'ROW': 0,
                      'COLUMN': 0,
                      'X': 0,
                      'Y': 0,
                      'H': 0,
                      'W': 0,
                      'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Consommation</td>
        <td colspan="2" style="text-align: right">Sortie BT</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Ibn Sina</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AG-CASA-PDR</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">BT : 12500</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
                      'SUB': []
                    },
                    {
                      'ROW': 0,
                      'COLUMN': 0,
                      'X': 0,
                      'Y': 0,
                      'H': 0,
                      'W': 0,
                      'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Consommation</td>
        <td colspan="2" style="text-align: right">Sortie BT</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Ibn Rushd</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AG-CASA-PDR</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">BT : 12500</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
                      'SUB': []
                    },
                  ]
                }
              ]
            },
            {
              'ROW': 0,
              'COLUMN': 0,
              'X': 0,
              'Y': 0,
              'H': 0,
              'W': 0,
              'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Consommation</td>
        <td colspan="2" style="text-align: right">Expédition</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Ahmed Zewail</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AI-PDR-LOG</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
              `,
              'SUB': [
                {
                  'ROW': 0,
                  'COLUMN': 0,
                  'X': 0,
                  'Y': 0,
                  'H': 0,
                  'W': 0,
                  'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Production</td>
        <td colspan="2" style="text-align: right">Reception</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Hayat Sindi</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AG-AGADIR-PDR</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
                  'SUB': [
                    {
                      'ROW': 0,
                      'COLUMN': 0,
                      'X': 0,
                      'Y': 0,
                      'H': 0,
                      'W': 0,
                      'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Consommation</td>
        <td colspan="2" style="text-align: right">Sortie BT</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Abderrahmane Ibn Khaldun</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AG-AGADIR-PDR</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">BT : 12500</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
                      'SUB': []
                    },
                    {
                      'ROW': 0,
                      'COLUMN': 0,
                      'X': 0,
                      'Y': 0,
                      'H': 0,
                      'W': 0,
                      'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Consommation</td>
        <td colspan="2" style="text-align: right">Sortie BT</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Latifa Elouadrhiri</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AG-AGADIR-PDR</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">BT : 12500</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
                      'SUB': []
                    },
                    {
                      'ROW': 0,
                      'COLUMN': 0,
                      'X': 0,
                      'Y': 0,
                      'H': 0,
                      'W': 0,
                      'CONTENT': `
<div style="width: 300px; height: 260px">
  <table style="border: 1px solid black; border-collapse: collapse; margin: 5px">
    <tbody>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="2" style="text-align: left">Consommation</td>
        <td colspan="2" style="text-align: right">Sortie BT</td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px">Fatima al fihriya</span><br>
          <span style="font-size: 14px; font-weight: normal; margin-top: -2px">2023/05/26 12:30</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
          <span style="font-size: 16px; font-weight: bold; margin-bottom: 0px;">PG00152 (COPG-01256) - Jeu de joints d'etanchéité culasse de cylindre pour voiture</span><br>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">AG-AGADIR-PDR</span>
          <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: black; border-radius: 5px; font-size: 8px; color: aliceblue">EMP-01-02-225</span>
        </td>
      </tr>
      <tr style="border: 1px solid black; padding: 8px;">
        <td colspan="4">
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aqua; border-radius: 5px; font-size: 8px;">Qte : 25300</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">DISPO</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LIBR</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">Unité</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">N° : 120002563</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">LOT : LOTBRXF</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">REF : 002186</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">EMB : PACK</span>
            <span style="font-weight: bold; display: inline-block; padding: 5px 10px; margin-left: 5px; margin-bottom: 5px; background-color: aquamarine; border-radius: 5px; font-size: 8px;">BT : 12500</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
                      'SUB': []
                    },
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

  public configGraph = {
    'margin' : {x : 5, y : 5},
    'space' : {h : 50, w : 100},
    'nodesBorders' : {
      'withBorder' : true,
      'stroke' : 'black',
      'strokeWidth' : 2,
    },
    'arrowBorders' : {
      'stroke' : 'black',
      'strokeWidth' : 2
    },
    'backgroundColor' : '#fbfbc0',
    'zoomColor' : '#068DA9'
  };

  private y = 0;

  private configMaxH = {};
  private configMaxW = {};

  public dimGraphe = {somHeight: 0, somWidth: 0, Zoom: 1};

  private viewBoxX = 0;
  private viewBoxY = 0;

  private isPanning = false;
  private startPanX = 0;
  private startPanY = 0;

  async ngOnInit() {
    // Use the shadow DOM to get the Width and the height of the div to show.
    const shadowRoot = document.createElement('div').attachShadow({ mode: 'open' });
    // Define the Height & Width.
    await this.defineHW(this.data, shadowRoot);
    // Define the ROW & COLUMN.
    await this.defineCoordinates(this.data, 0, 0);
    // Define the X & Y of eatch ROW and COLUMN.
    await this.defineMaxDimByRowColumn(this.data);
    // Define the X & Y of eatch Node.
    await this.calculatePositionNode(this.data);
    // Define the Width & Height of the graph.
    this.dimGraphe = await this.getGrapheDimension();
    const node: any = await document.getElementById('GraphId');
    // Draw the graph.
    await this.drawGraph(this.data, node, null);
  }
  private async defineHW(node: TreeNode, shadowRoot){
    shadowRoot.innerHTML = node.CONTENT;
    const virtualDiv = shadowRoot.querySelector('div');

    let strHeight;
    strHeight = virtualDiv.style.height.replace(/px/g, "");
    node.H = strHeight

    let strWidth;
    strWidth = virtualDiv.style.width.replace(/px/g, "");
    node.W = strWidth;

    for (const child of node.SUB) {
      await this.defineHW(child, shadowRoot); // Recursively traverse each child
    }
  }
  private async drawGraph(node: TreeNode, nodeGraph, previousObj) {
    nodeGraph.innerHTML +=
      (this.configGraph.nodesBorders.withBorder? '<rect x="'+node.X+'" y="'+node.Y+'" width="'+node.W+'" height="'+node.H+'" stroke="'+this.configGraph.nodesBorders.stroke+'" stroke-width="'+this.configGraph.nodesBorders.strokeWidth+'" fill="none" />' : '')
      + '<foreignObject x="'+node.X+'" y="'+node.Y+'" width="'+node.W+'" height="'+node.H+'">'
      + node.CONTENT
      + '</foreignObject>'
      + (previousObj === null ? '' : await this.drawArrow
        (
        Number(previousObj.X) + Number(previousObj.W),
        Number(previousObj.Y) + (Number(previousObj.H) / 2),
          Number(node.X), Number(node.Y) + (Number(node.H) / 2)
        )
      )

    for (const child of node.SUB) {
      await this.drawGraph(child, nodeGraph, node); // Recursively traverse each child
    }
  }
  private async defineCoordinates(node: TreeNode, x: number, y: number) {
    node.COLUMN = x;
    node.ROW = y;
    for (let i = 0; i < node.SUB.length; i++) {
      if (i != 0)
        this.y = this.y + 1; // Increment the X coordinate for each child
      await this.defineCoordinates(node.SUB[i], x + 1, this.y); // Recursively traverse each child with updated coordinates
    }
  }
  private async defineMaxDimByRowColumn(node: TreeNode) {
    if (!(node.ROW in this.configMaxH)) {
      this.configMaxH[node.ROW] = 0;
    }
    if (!(node.COLUMN in this.configMaxW)) {
      this.configMaxW[node.COLUMN] = 0;
    }

    if (this.configMaxH[node.ROW] < node.H) {
      this.configMaxH[node.ROW] = node.H;
    }
    if (this.configMaxW[node.COLUMN] < node.W) {
      this.configMaxW[node.COLUMN] = node.W;
    }
    for await (const obj of node.SUB) {
      await this.defineMaxDimByRowColumn(obj);
    }
  }
  private async calculeSumValues(object, limit, egnoreLimit) {
    let sum = 0;
    for (const key in object) {
      if (egnoreLimit === true) {
        sum += Number(object[key]);
      } else {
        if (Number(key) < limit) {
          sum += Number(object[key]);
        }
      }
    }
    return sum;
  }
  private async calculatePositionNode(node: TreeNode) {
    node.X = (
      Number(await this.calculeSumValues(this.configMaxW, node.COLUMN, false))
      + (node.COLUMN * this.configGraph.space.w) + (node.COLUMN === 0 ? this.configGraph.margin.x : 0)
      // + this.configDim.startx
    );
    node.Y = (
      Number(await this.calculeSumValues(this.configMaxH, node.ROW, false))
      + (node.ROW * this.configGraph.space.h) + (node.ROW === 0 ? this.configGraph.margin.y : 0)
      // + this.configDim.starty
    );

    for await (const obj of node.SUB) {
      await this.calculatePositionNode(obj);
    }
  }
  private async getGrapheDimension() {
    let somWidth = 0;
    somWidth = Number(await this.calculeSumValues(this.configMaxW, 0, true));
    let keys = Object.keys(this.configMaxW);
    somWidth += (keys.length * this.configGraph.space.w);

    let somHeight = 0;
    somHeight = Number(await this.calculeSumValues(this.configMaxH, 0, true));
    keys = Object.keys(this.configMaxH);
    somHeight += (keys.length * this.configGraph.space.h);

    return {somHeight, somWidth, Zoom: 1}
  }
  private async drawArrow(fromX, fromY, toX, toY) {
    let arrowSVG = `
        <line x1="${fromX}" y1="${fromY}" x2="${((toX - fromX)/2) + fromX}" y2="${fromY}" stroke="${this.configGraph.arrowBorders.stroke}" stroke-width="${this.configGraph.arrowBorders.strokeWidth}" />
        <line x1="${((toX - fromX)/2) + fromX}" y1="${fromY}" x2="${((toX - fromX)/2) + fromX}" y2="${toY}" stroke="${this.configGraph.arrowBorders.stroke}" stroke-width="${this.configGraph.arrowBorders.strokeWidth}" />
        <line x1="${((toX - fromX)/2) + fromX}" y1="${toY}" x2="${toX}" y2="${toY}" stroke="${this.configGraph.arrowBorders.stroke}" stroke-width="${this.configGraph.arrowBorders.strokeWidth}" />
    `
    return arrowSVG
  }
  zoomIn() {
    const svg = this.svgElement.nativeElement;
    this.dimGraphe.Zoom = this.dimGraphe.Zoom + 0.1
    svg.setAttribute('viewBox', `${this.viewBoxX} ${this.viewBoxY} ${this.dimGraphe['somWidth'] * this.dimGraphe.Zoom} ${this.dimGraphe['somHeight'] * this.dimGraphe.Zoom}`);
  }
  zoomOut() {
    const svg = this.svgElement.nativeElement;
    this.dimGraphe.Zoom = this.dimGraphe.Zoom - 0.1
    svg.setAttribute('viewBox', `${this.viewBoxX} ${this.viewBoxY} ${this.dimGraphe['somWidth'] * this.dimGraphe.Zoom} ${this.dimGraphe['somHeight'] * this.dimGraphe.Zoom}`);
  }
  panWithMouse(event: MouseEvent) {
    if (this.isPanning) {
      const dx = event.clientX - this.startPanX;
      const dy = event.clientY - this.startPanY;
      this.viewBoxX -= dx;
      this.viewBoxY -= dy;
      this.svgElement.nativeElement.setAttribute('viewBox', `${this.viewBoxX} ${this.viewBoxY} ${this.dimGraphe['somWidth'] * this.dimGraphe.Zoom} ${this.dimGraphe['somHeight'] * this.dimGraphe.Zoom}`);
      this.startPanX = event.clientX;
      this.startPanY = event.clientY;
    }
  }
  startPan(event: MouseEvent) {
    this.isPanning = true;
    this.startPanX = event.clientX;
    this.startPanY = event.clientY;
  }
  stopPan() {
    this.isPanning = false;
  }
}
